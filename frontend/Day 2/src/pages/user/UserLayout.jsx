import PropTypes from 'prop-types';

// import Navbar from '../../components/ui/Navbar';
import Navbar from "../../components/ui/user/Navbar"
import Footer from "../../components/ui/user/Footer"

function UserLayout({children}) {
    return (

        <div className="flex flex-col min-h-screen no-scrollbar overflow-y-auto"> 
            <header>
                <Navbar />
            </header>
            <main className="flex-grow">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

UserLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default UserLayout;