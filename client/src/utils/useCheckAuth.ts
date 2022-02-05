import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useMeQuery } from '../generated/graphql'

export const useCheckAuth = () => {
	const router = useRouter()

	const { data, loading } = useMeQuery()

	useEffect(() => {
		if (!loading) {
			if (
				data?.me &&
				(router.route === '/dang-nhap' ||
					router.route === '/dang-ky' ||
					router.route === '/quen-mat-khau' ||
					router.route === '/dat-lai-mat-khau')
			) {
				router.replace('/')
			} else if (
				!data?.me &&
				(router.route === '/thong-tin-ca-nhan' ||
					router.route.includes('/quan-tri'))
			) {
				router.replace('/dang-nhap')
			}
		}
	}, [data, loading, router])

	return { data, loading }
}
