

const MendaftarKelas = ({message, close}) => {


    return (
        <>
        <div className="position-static row z-1 mx-auto bg-danger-subtle p-2 py-3 text-center text-black py-auto" style={{height:"60px", width:"250px", marginTop:"-10px"}}>
            <h6 className="col-11">{message}</h6><button onClick={()=>close()} className='me-0 col-1 p-0 bg-transparent border-0 border-black text-black'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" class="bi bi-x-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
            </svg>
            </button>
        </div>
        </>
    )
}

export default MendaftarKelas;