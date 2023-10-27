'use client'
import ResumeCard from '@/components/ResumeCard/ResumeCard'
import { useResumeStore } from '@/stores/resumeStore'

const ManagerList = () => {
  const { management } = useResumeStore()

  return (
    <>
      {management.map((res) =>
        <ResumeCard resume={res} key={res.id} state='management' />
      )}
    </>
  )
}
export default ManagerList