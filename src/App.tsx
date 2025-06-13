import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "bootstrap"
import Navigation from "./Navigation"
import Sidebar from "./Sidebar"
import ItemList from "./ItemList"


export default function App() {
  
  return (
    <>
      <Navigation />
      <h1 className="text-center">Quick Start Front End Weeks 14-16 Assignement</h1>
      <h1 className="text-center">Under Construction</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 col-12">
            <Sidebar />
          </div>
          <div className="col-md-8 col-12">
            <ItemList />
          </div>
        </div>
      </div>
      
    </>
  )
}

