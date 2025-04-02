import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'



const UserSignup = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ userData, setUserData ] = useState({})

  const navigate = useNavigate()



  const { user, setUser } = useContext(UserDataContext)




  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')

  }
  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <img className='w-16 mb-10' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASUAAACsCAMAAAAKcUrhAAABMlBMVEX///+sAADp6eny8vKvAADk5OTt7e329vbqv73hrgCxAADgqwDi4uLr6+vrwb+/zeMANpAALIzJ5ckAKYsAM48AL43uy8nc3Nz368PT3OsAKowAJYoumSzd5PD0394AIInx9Pn46+r689z25eTo7fXE0eUqmCgflRzW69b58NLw0tH+/Pb89+jv9+9xtXDb7dvVjYoAG4cAkADv1pSlttQAEYVMpkrz4a2OxI2JnsZAoD5Zq1jjrarluj347suYqs3u04nCUEu9QTy2HhfgpKFjfbMmTZpMaKfFW1fZlpPdpqQZRZe2vdW2KSVwiLlYdK+93L3qyGPMeHUxV5/owV2hzaFmsGV5uXjjtCfMbWkJP5TszXnmvUvz4bI5YaZ5j729ODEAAIOv1a/o49GIwYfHcG+kYZMwAAAVKElEQVR4nO1bCVfizLataDQQbBJmkBmBMIMSQcYwDzKDDDJ6efr//8I7BQ7YX3/33fXu+lZ69apti01loNics88+lYAQAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAcEfhYTRwcg9h98eDEWx5beE0U2o+jcIUZXnCksBV3LP5HdGgkrk2z12XKXlnsnvjDHN5hOsmulRcs/kd0aLyrvL7Nu4R7nlnsrvixv2GVWoMVWuUrWQQ+Zqx3W7XZ+vvpV+t0rioBMsrXirhFhKoVYoHHLORbxtLDU6q07vzMg5jV/AQbFvoQRrzFM99Y1bXpbqtxav3eLbOQ1NOafxCxipNmpXa89VeuxAN4qQnHMZODnE1a367vJ3Y6lGhR6pVpVi6YRaHZKXpb5B53TqJGQxbJHrt5KmMVujXno0OKbQTcghL0uShjc0xa641Xe6HGeRcyo/ocWGmMdeu0333GrkkFm9dXy93tTcdvil6OM4l5xz+Q6wS4+VBDjvnpFhjApZPZN4K1k4fuKT9B0fwCXnXL6jTLNUlaV6dNntUKsVss0DnFJ3Z90NJpI04PlOf9ffbicNu2zz+Q5gyejuJaCbUyuMCqNc08g4b+/vDbxBsx00Jx2ev7YuJw299T/Rpmg8MJ2lcvt4PPqfv57Lbrd7//Pdy7Qi9JJwv1B5tVtGWYIwEsXJku9bBp0t1+cHoig1eN2BJcbodp+7ASf7f67zDOc5vyD4jw/z6TeiXJl6vd7vZ8S/8DGYLJfLxqD+86cQjqRXq3Qk/PP+FXZcfVSMWbrmRkbFzX/5Zv/f2N27ELLvGtJyIHKZOt/nmreG5YEl6MMpigZQ5XeeHO1nmj1U43j27s6WEubx6Wzqtwl3d3ez4ddJ7f8Ca6Ez6G7vf/Zf99cGXs/zTvH7cHqtUimVKtUiGfy+oczSlQo8sPmQUaGWTbx390CIeG3oSP1GP1PXNJZ90dXRWRiX6wcLeBm3a3m6DAwp3iiKbT1TanxYTNiHh9n93p8bpmzTKQrEBCH7ddaMsy/WNQOxedv9/nL3GakvDbZ9n/Q1FkliikYLpWq1UqqU6dOAqrDUWwhoYqGHM6pls3I7p4QyVk1j0O+K0hZck8Xnsxg02BD4WPaGgYkxjzSbqFRpFpoEUIhD2M9TgdkdZFo2G0tlH2KpONKmhOnXaTuNjnWyHWScu2+v5tJZoBPCdeIzyMJJ5UJ5wChtTj4VnlSL9NcBFdbItMZ5mq45GKP6H+bi7+G7BQ0RRc7CDZYaTcZr4XzdrkbDeYEmljIiJjR+oaAcUy8s5JqiQrMHlh4EW24ajway+7ktZ/M/BB5mKZv/S5wkXSPT6dRd1sY3aRI1Ol1n26xnNPV3jx9Zq54iwTWk22L1pFQ9ecLmtWr0eUDlBVXenissa0RutXwsda1Ovj+w+zLLa16/bGwbvNVp5a99Fo7jaLqSAH56NYru5Z9pqlbpPdNVN3I7mOkdDhxQ8KzfD9E0E+a22Fx4/Tyty7BcGuqZ3VInWk5cxSCT4SeZnbRzinB+4CmyUBUjJeViMdoEkwvlYg15FympVh8HVF7KFDvusVVjSK2WzQiALu24peH6nq8P9AO9odkHwzQxDDi7nfP1QJYSCXVoTL/UqmyvN75BeaplVCgUxuHdHg3v7oRcbD7P+m37feph7rdl9/GP89Y1k8zEaYAc9n21PJZ/wS9XN0xg1IfZC4MWrderCIqURkplYVUqKNfm5Gqh2rwfAbEEEl6mq2pZWWJcwJRu4LLX61LfoIHuBHINu28v54P0enTk2xDviR7NtiDoHWPq2XHjVhvjQiorzIbRuDYe0M6h2mXnKSHln2oD7+f16SaDRt+X0UxcPt+H6g7Eeqe5k7jdLeeyWywW70q1WCzSabN5gbVpUSiAOsFvQbWOHI+o9BB6TuTpat7hkM9UHgDxL0IeNJZ8w26Hj/7wpoClFpiAl4MVYNlKDUIon+hRCSh36lD8LvtwYCgQAKZS/ofhcK8dCrOA9l2bXBO9YdKvT3iDaOfetcnSQOIAYjXT4TFHPu5MtV4tFoX1CDzAepWEMlcwrwqjtCepSnsOhwBL4+cErnFI5nUTcJZ1a3MgiRP9BNTC52K8YJBBxsc0XW6/gBmgqbHxrUqx5SpFGW/UCnUIDYENrfbguqPRnH8es81eh7Zs/DOYdprOYNfR6DUZ10fKNbc+Uexu7+vWndflQnYuiTV7ZPYsVKUI8hTN5hEMFKDIeRYl88E5VV5C7AsF0Zw3qtUys6Tp7ETfzsDzDe4ElhrlCFUrbSPL1kI96lmBHEZj2+hgQu8mOIAZiWq12pxNsM1z02jKP/wMJq9z4Nvq+4OlHvg+jHA66/2t1Vn3NpfYD1g400KZBKLALRXDQbMnAta7sEgWksGiZ7GOmHE0VV4ctWfKWKHhw5GZpYx1h7qQbpglrNo446DfQm26yj6CaLoZpkUljG5oN42Yn48VjHggGtjv99r4DIxlbBgN5PwP2s9gqmt4qwHOqen6jik3mXS5LjhKy7KOE84CoeSJlNbmtGpkNnuAJDMOJmXp6Wn0pFxAZIUR89JDCjbBJKhHh8xrcChzUNr+dqLvWOwnJalNVUNIDZ9hqEy9GY3QIhzbTbXiKMeBOZgkIZubgbfMzWMz7UwAsdK+H9218tATTniNZDmc0uLUNzISsLPTiV4XA3m4Vq4WyXBkBUbgE9heFgql9SLogWBy93pG6jGfUFB5JDdLknViQYO6PaPhQWq5T3/Tpiq1xPNzpUxBjVGrFQ4G3TgcuKE6sPRwlwO/pI1PY1mbkNs/xMBrztFnyiENn6kvM1JnCdkLT5vWbaexrXPeW6ioHCTc/yyw316BoVSOVqVkabVYQfJhogpQ6MwgVMASS7XKVNsIwqiQ0QlgiNZJ81riMhNeB3nwxVKN6r2NK4m3lxbdgzRzQJlRO9zumxAOqXgWm4FsYC7YBEHYI7Sf7uf+XDSq/fBM0rVBw/MdXifilPP9C9TJ223udreSzwIx6zPjuFE9JdebiMecVKYXa1RKpwvHdkW5QWFz2FFl39rVsbtN9UCYZGZJZ9iKzYa108Fv6JSlN/RGs+1amX5hQm4g6WuBR5v1C7Hh3J+avoINCKBhzu+3zYUHUPMPYfLyevDanY5hYIFz7pwuH4iS6OtMfD4OEs5rBh+wWivXhdU6uRrBQxBM5WJ1aOkWIOgec8QBffZzzehWUFU3IzNLkhVKdL1T57bXme8sjR97vRe8fFJGeFXga31nKAgzLZra5tFpNvb6+pDzvz4Iw5kwROFPYQL9bg4mu51hKYK9aC4nvGjxctJtxm7xggVHaVUw8lRYraCuRSJJMN3mNO5R1snSujRamIOYJapXbisqCiNdhaIhXx+HkXFm7AP9pGPV6weuE/V+hFhCoXz1rUI/M47TBdW94B8iNIU2RevHCSf497OsLZe1TePhwCdLFo2+ubV2eM3O4hOdnJ0Tt1ar5tbrghIKnwUucZtNQaUKmlfKdTINBrNUShfToFArZcFTDJs9kHFs+bkyzlNszS03Sxr97e1ysOXrhib6maVnemwcUwmHUf0VSkPQoil68O8D8Vd/dhpHc5Dvh5hgy4Jyf8m3a2sYZKSBgZ/YueVSGnS720ZDswOvBKHkQiVVsvgEphus9zqZTKZHo9Eqje0TOPHVpggus+io0mUmBJayQtUglmS9hLIzaOreLtgZ8XqC15U+xh+psbtFtdruBLDkPllQTdlsD/FZbp+NzSHxAvH4XHgNDHNaWxaefLGE6taM1GjseENmp2n2d7t+U2rwPjv0ufijSB5U+lD8D9RAbXtaj1ar5MZcBLdUDJqLNz3qBpXbDtSiHuVc0cXY6ZqM2OlzYlO/BCvwyVIeqjDdo6n8mGo7oCf/+Cghy/wPKX8uu38VZlDUtNFXYRrI7vc22xT3dp8nlq711k6TB7fa0YvSbpepD5ZbECVoTlwIbVSg3GvlCFrdTRFa3mAkGIygiKcIMBcxS0HwSyjRNrpDY6osO0vW+mAr9ZdWA6/HLLnex/PUsyNUoWtMm3qE5u2Tpb1gm/n92Qft0CYcKn805s/5szPB5n+NR7/UG7oUjZjZgWxjOO+bIpexStAjgg2ArUHlAjdym9JCGSkWwygM/ETCkSAY8TA8C4eLEfdLdZxw11p0nqLlbnczBoN1Um8sm4OlARe5j+VFBVXJs9C+4dQLMV/LznshG8+mXqcpqGlRnF/xmD82jaVykIkB7adfApY6vAHcwKDB632QYt0Bb20iqA/vL7FWLjar1RMk26rogb4tglC4COEUjng8Qcg5c5h5Yan8ywuVD7EUcsu7dCLpOmKmY1hCbkAH7/tkSU2xVK9SrpTbVPu0EANLM1s2m9tjHYrGo9EAsDQTIAVtgjZwwhIoHr9sGPRLXi9J/Xq9v7VKFp/PfvDiIEyqDdo8PSU3a9BxSLFDqr0jGPTgqwQVuqwwVtsONUuFGIV813YR7rA6nUlflJr1rS4DRe7DMIUoUO38mC6PqbHjhKWADTiyvQ5TtpQ2GoAcg0pnmw3383lWmMZPWZKuMfX8ZMk7t5lul6sPXF6v3fL+Ch7VpgTaNHoqKFWFEggRAK8MhIOFjyXdCqVAz+VEj+1R6s/+USY4rV1kkbZSU6+v42so78Pg6ZhQhX0MJajWKUsom3rI5fa48oNyI4inHJhuNEtNY1DrTnQJ2Z2QcvySNzQGzY7VqrsXfRavy/5+v0a4sDInS5sNuCMQKOVqkz4gidu54yIcqvQYI+R9D6bQdofkle/BrcXV5PvWwYTvZEBG3mlyQ8bRL2XoUajWN+ubg9CZzmNav38OkTR9uLP553ub3+/fp8BDaU8uqOn0g/q2M8lIEiTf5DrjtUAL9+nIzCoQInNyvSooVyPsB/C/VbKIRh8slcFzM+qqwoHvp7iR+86cTsM56XMZXs8bAI1jZANL1ecySz+3wNudXg7bC6l4KraP5/yCP5v124bx6V0qZcsFolqQq/nXNQI00O26muVSb9VN6lJjAk7Ta/m69SesWgVHmCBVCa/mJoNPBRBuhKC7e2fpGTLO3Rrjy4F0K5GXtci5eDBKHFe/70A0gYpcuw7DbqoXMlZ6CXwBRe04YQkqXEzIvQamqenMZrMNX2fR+CvQlRvOs7aUX7j7aHiRaG1alsvGdidJmYEOOji7y3VyG9lIpSylIwUVNLmlxSa5UAY3T+HgymPGLOELBHnwSTX6BaZQZWmKlbvfhQbidgnqxPOZpt7qOoyGqJaConuQdnQ1hE4vQM/9/tkwEJjFUXyfimVfcXjlHmw5v/8h95CdC5/SxGkaWydfz0yuoQdaihZslriv84QLqidzpFRKetLKVUG1KhVGYDbXEaXSA6kINLmrVIJi84leq0q/tCh5WYJeQtfsgqPR1DP8hLcyh9sr89Sb4zFfa/VabI9hTlmKC0I0EEjNYlEtZB1EjvbOb8vCjxZalvhM+Iwl1LH6xDp/O9lJdqkOnpv7smMHgGyvcNws8IKlSlUKrkrrknKkSgc9h+sDaoqqhcpUOfFYhUZJvjsFDnDtnJ3JZMJvt31O0mg4nw/EA68v3bRYmq6Bt3N8azYf7lKzrM0/1eZssWEAuMHN7iyXehUeoij1FUtoq6kPJgOf2BVFvm7hfEfbfYJwuqAspDfr0mLlWaWLq2JpfbxVIHK8imKsVHs0lu8xFim5vyvHTQzXel7fydQbPI8/cjtqU+NHyLiXsZpl1W71t5Z8mhX8B9uUncVSd7YHbTQ6F0CjbPPXV2AvEAgce17p2sA3Js1mc7u8Fi1exv6XuzYj5hIEERbv9GoEzS7ugDcwDF3dYTtT67HVCpTbMkWp1UajvN9HcUm7ht7qvL93OpucBa/oQ4sJs4Jp1YAlo/qnhYvhw8x2dycIwl1qH9dG4wG0twl+P15tEoZx7bttsjg1Ur8vZfqZTt9lt/g4319euAhGezM6rguo3q1AGESp+HEvk6Nde8ZfkaOBJYXM1wgQXrL32b1ei+jD5dqCEniRcjx+HEPW4asDP3m6Qy8S32N7FD/2JYHhfoovgoNmfS7GSTvx9va22Rf7UEUtXt8vbhcEBTpYrPBmszEHI0UP8gTNoN7F9+0MhJAD5cfjFmij3CwhkA2vy+XyWey+Qyy5wSxRR9Bqd+hnTxfVBsIoDs4bHnDPG9Vqca8LuQdEnSzsIrsoMi5wky54w7+8ATgSxKsBCPgpRoJm3O5GPLhb+djuVhvdN/CL4J/sLB1LECi3xfW+ZMk4HLWa0Vir1dS/uGqI00qL+11MVzRw5AuiCl8f+LpIgKnh4HR23MH93W3SYQ80uB4PlqLjoknQbI58bWZCCgXMwIi/sSM7S8j1wRP3eZEA5EhtvHG7f7W8Ez3ypH1nCw99jXyxhIMUkwTg/vYWacwTXgoAeg4rA8Hvd6K6HSBJCrzKJT9LCLcQ+FYKwPtzhTp0VO2/WQSLRuPxQODrbuYwPMPPT29v9nKHW0yw7v3b18YLSxBP8BD51Wa3I2RUy9vL/R3wTV240v1X83Mh71GX/nswv9W3iT7hdhjfQb45S0BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA8H+DOb+8vDw/Z/4NzvEusM/Pe6G/7ir3u/mHwJz/uLi4OPuBSbj8NX78OLs47AM4GT7/oA/2+BqT+/38Mzj/ccagH1cXZ2dHLn4NCJLLq4ur06GzM2Dn5/1+/KE0XWKSTCYGKLi6RMh0Be8TRi6Yq7NLBsEYcwljsJ/JBFydmc4hQ02wIzqyh9AV3srAfnDY+cXlH8kSc3mB36MJmUxXV8wFMl2gS3TJnF8h0zn6ARTAX6AJ/gCTzPmFCVgwmS7P0RUMAqMw/AMBayZ00CzT2bnc7+ifALDE4LcKmWc6QzgyEPxgljAF6OoCqILtmCXYfAEBdQwrCLqrMxPQdgEUQdSZ0AWD//yZLCFgCUgwIQTv+QJC6ooxwQ8OrssfpnN4CoUMh5kJCMNhdA7UmK7OznFq4sw78AanYGALHPHjz2QJ1NsEAnOFMw7/u8CcXRz/hx/wBmAIyIBnx53g6cXhF+/8Pn5xdTjsD9UlbJd+HKv9L3AcvTj893QU49vQx5Y/1Qpg03gwjn+Ld0P5E359BDiG/wX+XsKVzvgzsAAAAABJRU5ErkJggg==" alt="" />

          <form onSubmit={(e) => {
            submitHandler(e)
          }}>

            <h3 className='text-lg w-1/2  font-medium mb-2'>What's your name</h3>
            <div className='flex gap-4 mb-7'>
              <input
                required
                className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                type="text"
                placeholder='First name'
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
              />
              <input
                required
                className='bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                type="text"
                placeholder='Last name'
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
              />
            </div>

            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              type="email"
              placeholder='email@example.com'
            />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

            <input
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              required type="password"
              placeholder='password'
            />

            <button
              className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
            >Create account</button>

          </form>
          <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
        </div>
        <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
      </div>
    </div >
  )
}

export default UserSignup