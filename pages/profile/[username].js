import styles from '@/styles/Home.module.css';
import {useRouter} from 'next/router'

const Profile = () => {
    const router = useRouter();
    const {username} = router.query;

    return(
        <div className={styles.container}>
            Hello {username} !
        </div>
    )
}

export default Profile;