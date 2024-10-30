import Header from '../../components/userSide/Header'
import Footer from '../../components/userSide/Footer'
import AnimatedPage from '../../components/Animation'
import AllListings from '../../components/userSide/AllListings'

const WorkspaceListingsPage = (): JSX.Element => {


  return (
<>
  <AnimatedPage>
    <div className="min-h-screen flex flex-col bg-[#fcefe7] dark:bg-gray-800">
      <Header />
      <main className="flex-grow flex">
        <section className="flex-1 p-4">
          <AllListings />
        </section>
      </main>
      <Footer />
    </div>
  </AnimatedPage>
</>

  )
}

export default WorkspaceListingsPage

