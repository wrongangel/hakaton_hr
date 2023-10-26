import { Experience, Resume } from '@/models/resume'
import styles from './ResumeCard.module.scss'

interface Props {
  resume: Resume
}
const ResumeCard = ({ resume }: Props) => {
  const experience: Experience[] = JSON.parse(resume.experience)
  return (
    <div className={styles.resumeCard}>
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
          <h4>Experience:</h4>
          <div className={styles.resumeCard__experience}>
            {experience.map((exp, i) =>
              <div className={styles.resumeCard__experience_card}>
                <h5>{exp.company}</h5>
                <h6>{exp.start} - {exp.end}</h6>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.resumeCard__actions}>
        <button className={styles.resumeCard__actions_button}>reject</button>
        <button className={styles.resumeCard__actions_button}>accept</button>
      </div>
    </div>
  )
}
export default ResumeCard