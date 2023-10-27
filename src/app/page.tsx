import styles from './page.module.scss'
import Window from '@/components/window/window'
import HRList from '@/components/Lists/HRList/HRList'
import ManagerList from '@/components/Lists/ManagerList/ManagerList'
import AcceptedList from '@/components/Lists/AcceptedList/AcceptedList'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main__head}>Filters</div>
      <div className={styles.main__columns}>
        <Window header='In work'>
          <HRList />
        </Window>
        <Window header='At management'>
          <ManagerList />
        </Window>
        <Window header='Accepted'>
          <AcceptedList />
        </Window>
      </div>
    </main>
  )
}
