import { useContext } from 'react'
import AppContext from '../context/appContext'

export const useByFlag = () => {

  const {flag} = useContext(AppContext)

     
    function handleNativeName(){
        let nativeName = ""
          if(flag[0]?.name?.nativeName?.spa?.official){
            nativeName = flag[0]?.name?.nativeName?.spa?.official
          } else if(flag[0]?.name?.nativeName?.fin?.official){
            nativeName = flag[0]?.name?.nativeName?.fin?.official
          }else if(flag[0]?.name?.nativeName?.kir?.official){
            nativeName = flag[0]?.name?.nativeName?.kir?.official
          }else if(flag[0]?.name?.nativeName?.eng?.official){
            nativeName = flag[0]?.name?.nativeName?.eng?.official
          }else if(flag[0]?.name?.nativeName?.bar?.official){
            nativeName = flag[0]?.name?.nativeName?.bar?.official
          }else if(flag[0]?.name?.nativeName?.kat?.official){
            nativeName = flag[0]?.name?.nativeName?.kat?.official
          }else if(flag[0]?.name?.nativeName?.kor?.official){
            nativeName = flag[0]?.name?.nativeName?.kor?.official
          }else if(flag[0]?.name?.nativeName?.fra?.official){
            nativeName = flag[0]?.name?.nativeName?.fra?.official
          }else if(flag[0]?.name?.nativeName?.som?.official){
            nativeName = flag[0]?.name?.nativeName?.som?.official
          }else if(flag[0]?.name?.nativeName?.mkd?.official){
            nativeName = flag[0]?.name?.nativeName?.mkd?.official
          }else if(flag[0]?.name?.nativeName?.ara?.official){
            nativeName = flag[0]?.name?.nativeName?.ara?.official
          }else if(flag[0]?.name?.nativeName?.tur?.official){
            nativeName = flag[0]?.name?.nativeName?.tur?.official
          }else if(flag[0]?.name?.nativeName?.rus?.official){
            nativeName = flag[0]?.name?.nativeName?.rus?.official
          }else if(flag[0]?.name?.nativeName?.lav?.official){
            nativeName = flag[0]?.name?.nativeName?.lav?.official
          }else if(flag[0]?.name?.nativeName?.nld?.official){
            nativeName = flag[0]?.name?.nativeName?.nld?.official
          }else if(flag[0]?.name?.nativeName?.deu?.official){
            nativeName = flag[0]?.name?.nativeName?.deu?.official
          }else if(flag[0]?.name?.nativeName?.swe?.official){
            nativeName = flag[0]?.name?.nativeName?.swe?.official
          }else if(flag[0]?.name?.nativeName?.ell?.official){
            nativeName = flag[0]?.name?.nativeName?.ell?.official
          }else if(flag[0]?.name?.nativeName?.ind?.official){
            nativeName = flag[0]?.name?.nativeName?.ind?.official
          }else if(flag[0]?.name?.nativeName?.hye?.official){
            nativeName = flag[0]?.name?.nativeName?.hye?.official
          }else if(flag[0]?.name?.nativeName?.lao?.official){
            nativeName = flag[0]?.name?.nativeName?.lao?.official
          }else if(flag[0]?.name?.nativeName?.khm?.official){
            nativeName = flag[0]?.name?.nativeName?.khm?.official
          }else if(flag[0]?.name?.nativeName?.por?.official){
            nativeName = flag[0]?.name?.nativeName?.por?.official
          }else if(flag[0]?.name?.nativeName?.srp?.official){
            nativeName = flag[0]?.name?.nativeName?.srp?.official
          }else if(flag[0]?.name?.nativeName?.vie?.official){
            nativeName = flag[0]?.name?.nativeName?.vie?.official
          }else if(flag[0]?.name?.nativeName?.sin?.official){
            nativeName = flag[0]?.name?.nativeName?.sin?.official
          }
          return nativeName
      }

      function handleCurrencies(){
        let languages = ""
        if(flag[0]?.currencies?.DOP?.name){
          languages = flag[0]?.currencies?.DOP?.name
        } else if(flag[0]?.currencies?.GTQ?.name){
          languages = flag[0]?.currencies?.GTQ?.name
        }else if(flag[0]?.currencies?.CLP?.name){
          languages = flag[0]?.currencies?.CLP?.name
        }else if(flag[0]?.currencies?.UYU?.name){
          languages = flag[0]?.currencies?.UYU?.name
        }else if(flag[0]?.currencies?.USD?.name){
          languages = flag[0]?.currencies?.USD?.name
        }else if(flag[0]?.currencies?.XCD?.name){
          languages = flag[0]?.currencies?.XCD?.name
        }else if(flag[0]?.currencies?.CUP?.name){
          languages = flag[0]?.currencies?.CUP?.name
        }else if(flag[0]?.currencies?.TTD?.name){
          languages = flag[0]?.currencies?.TTD?.name
        }else if(flag[0]?.currencies?.EUR?.name){
          languages = flag[0]?.currencies?.EUR?.name
        }else if(flag[0]?.currencies?.PEN?.name){
          languages = flag[0]?.currencies?.PEN?.name
        }else if(flag[0]?.currencies?.SRD?.name){
          languages = flag[0]?.currencies?.SRD?.name
        }else if(flag[0]?.currencies?.CRC?.name){
          languages = flag[0]?.currencies?.CRC?.name
        }else if(flag[0]?.currencies?.NIO?.name){
          languages = flag[0]?.currencies?.NIO?.name
        }else if(flag[0]?.currencies?.HNL?.name){
          languages = flag[0]?.currencies?.HNL?.name
        }else if(flag[0]?.currencies?.GYD?.name){
          languages = flag[0]?.currencies?.GYD?.name
        }else if(flag[0]?.currencies?.PYG?.name){
          languages = flag[0]?.currencies?.PYG?.name
        }else if(flag[0]?.currencies?.ANG?.name){
          languages = flag[0]?.currencies?.ANG?.name
        }else if(flag[0]?.currencies?.JMD?.name){
          languages = flag[0]?.currencies?.JMD?.name
        }else if(flag[0]?.currencies?.VES?.name){
          languages = flag[0]?.currencies?.VES?.name
        }else if(flag[0]?.currencies?.AWG?.name){
          languages = flag[0]?.currencies?.AWG?.name
        }else if(flag[0]?.currencies?.KYD?.name){
          languages = flag[0]?.currencies?.KYD?.name
        }else if(flag[0]?.currencies?.MXN?.name){
          languages = flag[0]?.currencies?.MXN?.name
        }else if(flag[0]?.currencies?.BOB?.name){
          languages = flag[0]?.currencies?.BOB?.name
        }else if(flag[0]?.currencies?.BBD?.name){
          languages = flag[0]?.currencies?.BBD?.name
        }else if(flag[0]?.currencies?.BZD?.name){
          languages = flag[0]?.currencies?.BZD?.name
        }else if(flag[0]?.currencies?.ARS?.name){
          languages = flag[0]?.currencies?.ARS?.name
        }
        return languages
      }
    
      function handleLanguage(){
        let languages = ""
        if(flag[0]?.languages?.spa){
          languages = flag[0]?.languages?.spa
        } else if(flag[0]?.languages?.fin){
          languages = flag[0]?.languages?.fin
        }else if(flag[0]?.languages?.kir){
          languages = flag[0]?.languages?.kir
        }else if(flag[0]?.languages?.eng){
          languages = flag[0]?.languages?.eng
        }else if(flag[0]?.languages?.bar){
          languages = flag[0]?.languages?.bar
        }else if(flag[0]?.languages?.kat){
          languages = flag[0]?.languages?.kat
        }else if(flag[0]?.languages?.kor){
          languages = flag[0]?.languages?.kor
        }else if(flag[0]?.languages?.fra){
          languages = flag[0]?.languages?.fra
        }else if(flag[0]?.languages?.ara){
          languages = flag[0]?.languages?.ara
        }else if(flag[0]?.languages?.som){
          languages = flag[0]?.languages?.som
        }else if(flag[0]?.languages?.mkd){
          languages = flag[0]?.languages?.mkd
        }else if(flag[0]?.languages?.tur){
          languages = flag[0]?.languages?.tur
        }else if(flag[0]?.languages?.rus){
          languages = flag[0]?.languages?.rus
        }else if(flag[0]?.languages?.lav){
          languages = flag[0]?.languages?.lav
        }else if(flag[0]?.languages?.nld){
          languages = flag[0]?.languages?.nld
        }else if(flag[0]?.languages?.deu){
          languages = flag[0]?.languages?.deu
        }else if(flag[0]?.languages?.swe){
          languages = flag[0]?.languages?.swe
        }else if(flag[0]?.languages?.ell){
          languages = flag[0]?.languages?.ell
        }else if(flag[0]?.languages?.ind){
          languages = flag[0]?.languages?.ind
        }else if(flag[0]?.languages?.hye){
          languages = flag[0]?.languages?.hye
        }else if(flag[0]?.languages?.lao){
          languages = flag[0]?.languages?.lao
        }else if(flag[0]?.languages?.khm){
          languages = flag[0]?.languages?.khm
        }else if(flag[0]?.languages?.por){
          languages = flag[0]?.languages?.por
        }else if(flag[0]?.languages?.srp){
          languages = flag[0]?.languages?.srp
        }else if(flag[0]?.languages?.vie){
          languages = flag[0]?.languages?.vie
        }else if(flag[0]?.languages?.sin){
          languages = flag[0]?.languages?.sin
        }
        return languages
      }
    

  return {handleNativeName, handleLanguage, handleCurrencies}
}
