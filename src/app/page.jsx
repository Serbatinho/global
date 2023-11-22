import styles from '../styles/layout/app/Home/home.module.scss'

export default function Home() {
  return (
    <main className={`${styles['full-content-container']}`}>
      <div className={`${styles['mid-content-container']}`}>
        <div className={`${styles['content-container']}`}>
          <h1>Home</h1>
        </div>
      </div>
    </main>
  )
}
