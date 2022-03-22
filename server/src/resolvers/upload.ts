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
		file: Upload,
	): Promise<string> {
		const { createReadStream, filename } = (await file) as Upload
		const { name, ext } = path.parse(filename)
		const uploadName = `${name}_${Date.now()}${ext}`

		await createReadStream().pipe(
			createWriteStream(
				path.join(process.cwd(), `/../client/public/images/${uploadName}`),
			),
		)

		return `${process.env.CORS_ORIGIN_DEV}/images/${uploadName}`
	}

	@Mutation((_return) => [String])
	async multipleUpload(
		@Arg('files', () => [GraphQLUpload])
		files: Upload[],
	): Promise<string[]> {
		let urls: Array<string> = []
		for (let i = 0; i < files.length; i++) {
			let { createReadStream, filename } = await files[i]
			let { name, ext } = path.parse(filename)
			let uploadName = `${name}_${Date.now()}${ext}`

			await createReadStream().pipe(
				createWriteStream(
					path.join(process.cwd(), `/../client/public/images/${uploadName}`),
				),
			)

			urls = [...urls, `${process.env.CORS_ORIGIN_DEV}/images/${uploadName}`]
		}

		return urls
	}
}
