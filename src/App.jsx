import { Outlet, useLocation } from 'react-router'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { Toaster } from 'react-hot-toast'

function App() {
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <>
      {/* بک‌گراند فقط در بالای صفحه */}
<div className="relative pb-16 min-h-[90vh]">
  {/* بک‌گراند با افکت تیره و مات */}
  {isHome && (
    <div className="top-0 left-0 z-0 absolute w-full h-[660px] md:h-[560px]">
      <div className="relative bg-[url('../img/background/bg-header2.jpg')] bg-cover bg-center w-full h-full">
        {/* لایه مات و تیره */}
        <div className="absolute inset-0 bg-black/5 backdrop-brightness-50"></div>
      </div>
    </div>
  )}

  {/* محتوای اصلی با لایه بالاتر */}
  <div className="z-10 relative mx-2 md:mx-auto md:max-w-[1400px]">
    <Header />
    <main className="mt-8 md:mt-12">
      <Outlet />
    </main>
  </div>
</div>

      <Footer />
      <Toaster />
    </>
  )
}

export default App