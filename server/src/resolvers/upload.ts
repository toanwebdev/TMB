import { createWriteStream } from 'fs'
import { GraphQLUpload } from 'graphql-upload'
import path from 'path'
import { Arg, Mutation, Resolver } from 'type-graphql'
import { Upload } from './../types/Upload'

@Resolver()
export class UploadResolver {
	@Mutation((_return) => String)
	async singleUpload(
		@Arg('file', () => GraphQLUpload)
		{ createReadStream, filename }: Upload,
	): Promise<string | null> {
		const { name, ext } = path.parse(filename)
		const uploadName = `${name}_${Date.now()}${ext}`

		return new Promise((res, rej) => {
			createReadStream()
				.pipe(
					createWriteStream(
						`${__dirname}/../../../client/public/images/${uploadName}`,
					),
				)
				.on('finish', () => {
					res(`${process.env.CORS_ORIGIN_DEV}/images/${uploadName}`)
				})
				.on('error', () => rej(null))
		})
	}
}
