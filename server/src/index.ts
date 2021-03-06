import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import MongoStore from 'connect-mongo'
import cors from 'cors'
import express from 'express'
import session from 'express-session'
import { graphqlUploadExpress } from 'graphql-upload'
import mongoose from 'mongoose'
import path from 'path'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'
import { COOKIE_NAME, __prod__ } from './constants'
import { Brand } from './entities/Brand'
import { Brand_Category } from './entities/Brand_Category'
import { Category } from './entities/Category'
import { Color } from './entities/Color'
import { District } from './entities/District'
import { Order } from './entities/Order'
import { Order_Product } from './entities/Order_Product'
import { Product } from './entities/Product'
import { Product_Color } from './entities/Product_Color'
import { Product_Image } from './entities/Product_Image'
import { Promotion } from './entities/Promotion'
import { Province } from './entities/Province'
import { Role } from './entities/Role'
import { Slider } from './entities/Slider'
import { Slider_Image } from './entities/Slider_Image'
import { Specifications } from './entities/Specifications'
import { User } from './entities/User'
import { User_Role } from './entities/User_Role'
import { Village } from './entities/Village'
import { BrandResolver } from './resolvers/brand'
import { BrandCategoryResolver } from './resolvers/brand_category'
import { CategoryResolver } from './resolvers/category'
import { ColorResolver } from './resolvers/color'
import { DistrictResolver } from './resolvers/district'
import { ProductResolver } from './resolvers/product'
import { ProductColorResolver } from './resolvers/product_color'
import { ProductImageResolver } from './resolvers/product_Image'
import { PromotionResolver } from './resolvers/promotion'
import { ProvinceResolver } from './resolvers/province'
import { SpecificationsResolver } from './resolvers/specifications'
import { UploadResolver } from './resolvers/upload'
import { UserResolver } from './resolvers/user'
import { VillageResolver } from './resolvers/village'
import { Context } from './types/Context'
import { buildDataLoaders } from './utils/dataLoaders'
require('dotenv').config()

async function main() {
	const connection = await createConnection({
		type: 'mysql',
		...(__prod__
			? { url: process.env.DATABASE_URL }
			: {
					database: 'tmb',
					username: process.env.DB_USERNAME_DEV,
					password: process.env.DB_PASSWORD_DEV,
			  }),
		logging: true,
		...(__prod__
			? {
					extra: {
						ssl: {
							rejectUnauthorized: false,
						},
					},
					ssl: true,
			  }
			: {}),
		...(__prod__ ? {} : { synchronize: true }),
		entities: [
			User,
			Brand,
			Category,
			Color,
			Product_Color,
			Province,
			District,
			Village,
			Order,
			Order_Product,
			Product,
			Product_Image,
			Role,
			Slider,
			Slider_Image,
			User_Role,
			Specifications,
			Promotion,
			Brand_Category,
		],
		migrations: [path.join(__dirname, '/migrations/*')],
	})

	if (__prod__) await connection.runMigrations()

	const app = express()

	app.use(
		cors({
			origin: __prod__
				? process.env.CORS_ORIGIN_PROD
				: process.env.CORS_ORIGIN_DEV,
			credentials: true,
		}),
	)

	// Session/Cookie store
	const mongoUrl = `mongodb+srv://${process.env.SESSION_DB_USERNAME_DEV_PROD}:${process.env.SESSION_DB_PASSWORD_DEV_PROD}@tmb-cookies.cx9jc.mongodb.net/TMB-cookies?retryWrites=true&w=majority`

	await mongoose.connect(mongoUrl)
	console.log('MongoDB Connected')

	app.set('trust proxy', 1)

	app.use(
		session({
			name: COOKIE_NAME,
			store: MongoStore.create({ mongoUrl }),
			cookie: {
				maxAge: 1000 * 60 * 60 * 24, // one day
				httpOnly: true, // JS front end cannot access the cookie
				secure: __prod__, // cookie only works in https
				sameSite: __prod__ ? 'none' : 'lax', // protection against CSRF
			},
			secret: process.env.SESSION_SECRET_DEV_PROD as string,
			saveUninitialized: false, // don't save empty session, right from the start
			resave: false,
		}),
	)

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [
				UserResolver,
				UploadResolver,
				ProvinceResolver,
				DistrictResolver,
				VillageResolver,
				CategoryResolver,
				BrandResolver,
				ColorResolver,
				ProductResolver,
				ProductImageResolver,
				ProductColorResolver,
				SpecificationsResolver,
				PromotionResolver,
				BrandCategoryResolver,
			],
			validate: false,
		}),
		plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
		context: ({ req, res }): Context => ({
			req,
			res,
			connection,
			dataLoaders: buildDataLoaders(),
		}),
	})

	await apolloServer.start()

	app.use(
		'/graphql',
		graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 50 }),
	)

	apolloServer.applyMiddleware({ app, cors: false })

	const PORT = process.env.PORT || 4000
	app.listen(PORT, () =>
		console.log(
			`Server started on port ${PORT}. GraphQL server started on localhost:${PORT}${apolloServer.graphqlPath}`,
		),
	)
}

main().catch((error) => console.error(error))
