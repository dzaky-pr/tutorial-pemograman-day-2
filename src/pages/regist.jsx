import Auth from '../components/organism/auth';
import Layout from '../components/templates/Layout';

function RegistPage() {
  return (
    <Layout>
      <section className="min-h-screen bg-lime-600 flex justify-center items-center">
        <div className="container flex flex-col gap-4 h-fit  w-[320px] bg-white">
          <Auth authType="registrasi" />
        </div>
      </section>
    </Layout>
  );
}

export default RegistPage;
