"use client";

const ProductTabs = () => {
  return (
    <div className="mt-16">
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="product_tabs"
          className="tab mb-4"
          aria-label="Description"
          defaultChecked
        />
        <div className="tab-content">
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Experience premium sound quality with our flagship wireless
              headphones. Engineered with advanced noise-canceling technology
              and premium drivers, these headphones deliver exceptional audio
              performance for music lovers and professionals alike.
            </p>

            <h3>What&apos;s in the box:</h3>
            <ul>
              <li>Premium Wireless Headphones</li>
              <li>USB-C Charging Cable</li>
              <li>3.5mm Audio Cable</li>
              <li>Carrying Case</li>
              <li>User Manual & Warranty Card</li>
            </ul>

            <h3>Perfect for:</h3>
            <ul>
              <li>Music enthusiasts seeking premium sound quality</li>
              <li>Professionals working in noisy environments</li>
              <li>Travelers wanting comfort and noise isolation</li>
              <li>Gamers and content creators</li>
            </ul>
          </div>
        </div>

        <input
          type="radio"
          name="product_tabs"
          className="tab mb-4"
          aria-label="Specifications"
        />
        <div className="tab-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">
                Technical Specifications
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between border-b pb-1">
                  <span className="font-medium">Driver Size:</span>
                  <span>40mm Dynamic</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="font-medium">Frequency Response:</span>
                  <span>20Hz - 20kHz</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="font-medium">Impedance:</span>
                  <span>32Ω</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="font-medium">Sensitivity:</span>
                  <span>105dB</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="font-medium">Weight:</span>
                  <span>250g</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connectivity & Battery</h3>
              <div className="space-y-2">
                <div className="flex justify-between border-b pb-1">
                  <span className="font-medium">Bluetooth Version:</span>
                  <span>5.0</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="font-medium">Range:</span>
                  <span>10m / 33ft</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="font-medium">Battery Life:</span>
                  <span>30 hours</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="font-medium">Charging Time:</span>
                  <span>2 hours</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="font-medium">Quick Charge:</span>
                  <span>5 min = 3 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <input
				type="radio"
				name="product_tabs"
				className="tab mb-4"
				aria-label="Reviews"
			/>
			<div className="tab-content">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div>
						<div className="text-center mb-6">
							<div className="text-4xl font-bold mb-2">4.8</div>
							<div className="rating rating-sm mb-2">
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
							</div>
							<div className="text-sm text-base-content/70">247 reviews</div>
						</div>
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<span className="text-sm w-8">5★</span>
								<progress
									className="progress progress-primary w-24"
									value="85"
									max="100"
								></progress>
								<span className="text-sm">85%</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-sm w-8">4★</span>
								<progress
									className="progress progress-primary w-24"
									value="12"
									max="100"
								></progress>
								<span className="text-sm">12%</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-sm w-8">3★</span>
								<progress
									className="progress progress-primary w-24"
									value="2"
									max="100"
								></progress>
								<span className="text-sm">2%</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-sm w-8">2★</span>
								<progress
									className="progress progress-primary w-24"
									value="1"
									max="100"
								></progress>
								<span className="text-sm">1%</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-sm w-8">1★</span>
								<progress
									className="progress progress-primary w-24"
									value="0"
									max="100"
								></progress>
								<span className="text-sm">0%</span>
							</div>
						</div>
					</div>

					<div className="lg:col-span-2 space-y-6">
						<div className="border-b pb-4">
							<div className="flex items-center gap-2 mb-2">
								<div className="rating rating-sm">
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-orange-400"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-orange-400"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-orange-400"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-orange-400"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-orange-400"
									/>
								</div>
								<span className="font-medium">Sarah Johnson</span>
								<span className="text-sm text-base-content/70">2 days ago</span>
							</div>
							<p className="text-sm mb-2">
								<strong>Amazing sound quality!</strong>
							</p>
							<p className="text-sm text-base-content/70">
								These headphones exceeded my expectations. The noise
								cancellation is incredible and the battery life is exactly as
								advertised. Highly recommend!
							</p>
						</div>

						<div className="border-b pb-4">
							<div className="flex items-center gap-2 mb-2">
								<div className="rating rating-sm">
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-orange-400"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-orange-400"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-orange-400"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-orange-400"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-orange-400"
									/>
								</div>
								<span className="font-medium">Mike Chen</span>
								<span className="text-sm text-base-content/70">1 week ago</span>
							</div>
							<p className="text-sm mb-2">
								<strong>Great for work from home</strong>
							</p>
							<p className="text-sm text-base-content/70">
								Perfect for video calls and music. Comfortable to wear all day.
								The quick charge feature is a lifesaver.
							</p>
						</div>

						<div className="border-b pb-4">
							<div className="flex items-center gap-2 mb-2">
								<div className="rating rating-sm">
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-orange-400"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-orange-400"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-orange-400"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-orange-400"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-orange-400"
									/>
								</div>
								<span className="font-medium">Emily Rodriguez</span>
								<span className="text-sm text-base-content/70">
									2 weeks ago
								</span>
							</div>
							<p className="text-sm mb-2">
								<strong>Best purchase this year!</strong>
							</p>
							<p className="text-sm text-base-content/70">
								The build quality is excellent and the sound is crystal clear.
								Love the carrying case too. Will definitely buy from ModernShop
								again.
							</p>
						</div>

						<button className="btn btn-outline w-full">
							Load More Reviews
						</button>
					</div>
				</div>
			</div> */}
      </div>
    </div>
  );
};

export default ProductTabs;
