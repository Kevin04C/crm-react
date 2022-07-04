import '../styles/Spinner.css'

export const Spinner = () => {
  return (
    <div className='h-full flex justify-center mt-10'>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
