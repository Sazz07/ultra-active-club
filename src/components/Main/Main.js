import Header from '../Header/Header';

const Main = () => {

    return (
        <div className="flex flex-col md:flex-row">
            <section className="md:w-9/12">
                <div className="w-10/12 md:w-8/12 mx-auto mb-10">
                    <Header></Header>
                    <h3 className="text-left text-lg font-semibold">
                    Select Today's Exercises
                    </h3>
                </div>

            </section>

        </div>
    );
};

export default Main;