export const useDateFormat = () => {
  // indonesia fromat date 
  const date = new Date()
  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`
  const postDate = (date: string)=> {
    const postDate = new Date(date)
    const postDay = postDate.getDate()
    const postMonthIndex = postDate.getMonth()
    const postYear = postDate.getFullYear()
    return `${postDay} ${monthNames[postMonthIndex]} ${postYear}`
  }
  return {
    formattedDate,
    postDate
  }
}
