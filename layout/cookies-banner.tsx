import { faCookieBite } from "@fortawesome/pro-light-svg-icons";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { Accordion } from "../components/accordion";

const cookieLifespawn = (): string => {
  var now = new Date();
  var time = now.getTime();
  var expireTime = time + 1000 * 36000;
  now.setTime(expireTime);
  return now.toUTCString();
}

export const CookiesBanner = () => {
  const { t } = useTranslation("common");

  const refyCookies = [
    { title: t('cookies.type.analysis'), description: t('cookies.type.analysis-desc'), id: '_ga', value: 'xxxxxx', defValue: 'xxxxxx', expiration: cookieLifespawn() },
    { title: t('cookies.type.publi'), description: t('cookies.type.publi-desc'), id: '_pub', value: 'xxxxxx', defValue: 'xxxxxx' },
    { title: t('cookies.type.techniques'), description: t('cookies.type.techniques-desc'), id: '_tech', value: 'xxxxxx', defValue: 'xxxxxx' },
    { title: t('cookies.type.preferences'), description: t('cookies.type.preferences-desc'), id: '_pref', value: 'xxxxxx', defValue: 'xxxxxx' },
  ]

  const updateFieldChanged = (index: number, value: boolean) => {
    let newArr = [...cookies];
    console.log(value)
    newArr[index] = { ...newArr[index], value: value ? newArr[index].defValue : 'NaN' }
    console.log(newArr[index])
    setCookies(newArr);
  }

  const setAllCookies = (): void => {
    cookies.forEach(cookie => {
      document.cookie = `${cookie.id}=${cookie.value};${cookie.expiration ? `expires=${cookieLifespawn()};` : ''}`;
    })
    setSettedCookies(true);
  }

  const rejectAllCookies = (): void => {
    cookies.forEach(cookie => {
      document.cookie = `${cookie.id}=NaN;${cookie.expiration ? `expires=${cookieLifespawn()};` : ''}`;
    })
    setSettedCookies(true);
  }

  const getCookie = (name: string): string | null => {
    const nameLenPlus = (name.length + 1);
    return document.cookie
      .split(';')
      .map(c => c.trim())
      .filter(cookie => {
        return cookie.substring(0, nameLenPlus) === `${name}=`;
      })
      .map(cookie => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null;
  }

  const [settedCookies, setSettedCookies] = useState(Boolean);
  const [cookies, setCookies] = useState(refyCookies);
  const [editCookies, setEditCookies] = useState<boolean>(false);
  useEffect(() => {
    if (!document) { return };
    setSettedCookies(!refyCookies.some(cookie => !!!getCookie(cookie.id)));
  }, [])
  return (
    <>
      {!settedCookies &&
        <section className="fixed flex bottom-0 left-0 right-0 bg-gray-100">
          <div className={`max-w-6xl relative font-hint mx-auto flex ${editCookies ? 'flex-col' : 'desktop:flex-row mobile:flex-col'}  p-4 justify-between`}>
            {
              editCookies &&
              <div className="pb-5">
                {
                  cookies.map((cookie, i) => (
                    <div className="flex w-full max-w-6xl" key={i}>
                      <Accordion  first={i === 0} title={cookie.title} open={false} icon={faCookieBite}>
                        <div className="w-full flex justify-center items-center">{cookie.description}</div>
                      </Accordion>
                      <div className="flex items-start mt-5"><input type='checkbox' checked={cookie.value === cookie.defValue} onChange={e => updateFieldChanged(i, e.target.checked)}></input></div>
                    </div>
                  ))
                }
              </div>
            }
            {
              !editCookies &&
              <div className="flex w-full text-sm">{t('cookies.description')}</div>

            }
            <div className={`flex items-center mobile:justify-center mobile:my-5 h-auto space-x-4 ${editCookies ? 'justify-center' : 'ml-5'}`}>
              <div className="w-28 underline cursor-pointer" onClick={_ => setEditCookies(!editCookies)}>{t('cookies.setting')}</div>
              <button className="button-outline--primary" onClick={_ => rejectAllCookies()}>{t('cookies.reject')}</button>
              <button className="button-primary" onClick={_ => setAllCookies()}>{t('cookies.accept')}</button>
            </div>
          </div>
        </section>
      }
    </>
  )
}