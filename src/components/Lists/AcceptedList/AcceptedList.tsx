'use client'

import ResumeCard from '@/components/ResumeCard/ResumeCard'
import { useResumeStore } from '@/stores/resumeStore'

const AcceptedList = () => {
  const { accepted } = useResumeStore()
  return (
    <>
      {accepted.map((res) =>
        <ResumeCard resume={res} key={res.id} state='accepted'/>
      )}
    </>
  )
}
export default AcceptedList