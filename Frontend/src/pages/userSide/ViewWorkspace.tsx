import Header from '../../components/userSide/Header'
import Footer from '../../components/userSide/Footer'
import AnimatedPage from '../../components/Animation'
import WorkspaceView from '../../components/userSide/WorkspaceView'
import SearchBar from '../../components/userSide/SearchBar'

const ViewWorkspacePage = (): JSX.Element => {


  return (
<> 
  <AnimatedPage> 
    <div className="min-h-screen mx-auto flex flex-col bg-[#FAF1DF] dark:bg-gray-900"> 
      <Header /> 
      <SearchBar onSearch={()=>{}} /> 
      <main className="flex-grow flex"> 
        <section className="flex-1 p-4"> 
          <WorkspaceView /> 
        </section> 
      </main> 
      <Footer /> 
    </div> 
  </AnimatedPage> 
</>

  )
}

export default ViewWorkspacePage
