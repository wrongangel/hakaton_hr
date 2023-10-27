'use client'
import { Experience, Resume, Status } from '@/models/resume'
import styles from './ResumeCard.module.scss'
import { useResumeStore } from '@/stores/resumeStore'

interface Props {
  resume: Resume
  state?: Status
}
const ResumeCard = ({ resume, state }: Props) => {
  const { acceptHr, acceptManager, reject } = useResumeStore()
  const experience: Experience[] = JSON.parse(resume.experience)

  const handleAccept = (id: number): void => {
    if (!state) {
      acceptHr(id)
    } else if (state === 'management') {
      acceptManager(id)
    }
  }
  return (
    <div className={styles.resumeCard} key={resume.id}>
      <div className={styles.resumeCard__head}>
        <div>
          <h3>{resume.first_name ?? 'Ivan'} {resume.last_name ?? 'Ivanov'}, {resume.age}</h3>
          <p className={styles.resumeCard__head_title}>{resume.title}</p>
        </div>
        <div className={styles.resumeCard__head_quality}>{resume.quality}</div>
      </div>
      <div className={styles.resumeCard__content}>
        <div className={styles.resumeCard__content_block}>
          <h4>Skills:</h4>
          <div className={styles.resumeCard__skillSet}>
            {resume.skill_set.map((skill, i) =>
              <div className={styles.resumeCard__skillSet_skill} key={i}>{skill}</div>
            )}
          </div>
        </div>
        <div className={styles.resumeCard__content_block}>
          <h4>Last work:</h4>
          <div className={styles.resumeCard__experience}>

              <div className={styles.resumeCard__experience_card}>
                <h5>{experience[0].company}</h5>
                <h6>{experience[0].start} - {experience[0].end}</h6>
              </div>

          </div>
        </div>
      </div>
      {state !== 'accepted' &&
        <div className={styles.resumeCard__actions}>
        <button className={styles.resumeCard__actions_button} onClick={() => reject(resume.id)}>reject</button>
        <button className={styles.resumeCard__actions_button} onClick={() => handleAccept(resume.id)}>accept</button>
      </div>
      }
    </div>
  )
}
export default ResumeCard