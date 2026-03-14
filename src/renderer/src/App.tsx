import SlideRenderer from './components/SlideRenderer';

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-[1024px] h-[768px] overflow-hidden">
        <SlideRenderer currentSlideId="folie_3" />
      </div>
    </div>
  );
}

export default App;