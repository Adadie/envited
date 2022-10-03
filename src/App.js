import logo from './logo.svg';
import './App.css';
import './styles/index.scss';
import { Button, Container } from 'reactstrap';

function App() {
  return (
    <div className='body'>
      <main>
        <div className='d-flex flex-wrap flex-row justify-content-center align-items-center align-middle pt-5'>
          <div>
            <img
              src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T161122Z&X-Amz-Expires=86400&X-Amz-Signature=370c11c0d7130ae5b10749e8f720f53329e19db579457f97af9dd6c9db2df81a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject'
              alt='image'
              className='order-lg-1 order-md-2 order-sm-2'
            />
          </div>
          <div className='d-flex flex-column align-items-end order-lg-2 order-md-1 order-sm-1 w-25'>
            <div className='h2 text_1'>Imagine if</div>
            <div className='h2 text_2'>Snapchat</div>
            <div className='h2 text_3'>had events.</div>
            <div className='p  mt-2 text-right text_4'>
              Easily host and share events with your friends across any social
              media.
            </div>
            <button className='btn mt-4 btn_create'>🎉 Create Event</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
