import ResumeCard from '@/components/ResumeCard/ResumeCard'
import styles from './page.module.scss'
import Window from '@/components/window/window'
import resume from '../../public/resume.json'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main__head}>Filters</div>
      <div className={styles.main__columns}>
        <Window header='In work'>
          {resume.map((res) =>
            <ResumeCard resume={res} key={res.id} />
          )}
        </Window>
        <Window header='At management'>At management</Window>
        <Window header='Accepted'>Accepted</Window>
      </div>
    </main>
  )
}
