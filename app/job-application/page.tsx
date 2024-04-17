export default function JobApplicationPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center md:py-16 text-black">
      <div className="border relative w-full h-full max-w-4xl m-auto">
        <div className="absolute inset-0 z-0 origin-center transform shadow-2xl bg-emerald-500 md:block rotate-3"></div>
        <div className="relative z-20 flex flex-col h-full bg-white shadow-2xl">
          <div className="h-60 bg-emerald-950"></div>
          <div className="flex-1 py-8 overflow-hidden">
            <div className="h-full px-4 lg:px-12 leading-loose overflow-auto">
              <div className="py-5">
                <h2 className="text-2xl font-semibold">Hello World!</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  sed velit quaerat, sunt odio eligendi officiis quo ea impedit
                  accusamus aperiam maiores et id molestiae nisi, alias dolorum
                  doloremque? Quod.
                </p>
              </div>

              <div className="py-5">
                <h2 className="text-2xl font-semibold">Who am I?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis explicabo porro iste vero nemo laborum voluptatum
                  eum, eligendi totam tempora unde, praesentium deserunt iusto
                  dolores eveniet impedit doloremque officia architecto!
                </p>
              </div>

              <div className="py-5">
                <h2 className="text-2xl font-semibold">Why me?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis explicabo porro iste vero nemo laborum voluptatum
                  eum, eligendi totam tempora unde, praesentium deserunt iusto
                  dolores eveniet impedit doloremque officia architecto!
                </p>
              </div>

              <div className="py-5">
                <h2 className="text-2xl font-semibold">What&apos;s next?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis explicabo porro iste vero nemo laborum voluptatum
                  eum, eligendi totam tempora unde, praesentium deserunt iusto
                  dolores eveniet impedit doloremque officia architecto!
                </p>
              </div>

              <div className="py-5">
                <h2 className="text-2xl font-semibold">How to apply?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis explicabo porro iste vero nemo laborum voluptatum
                  eum, eligendi totam tempora unde, praesentium deserunt iusto
                  dolores eveniet impedit doloremque officia architecto!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
