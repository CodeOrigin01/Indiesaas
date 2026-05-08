import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

export default function LogoCloud() {
  return (
    <section className="bg-background overflow-hidden py-12">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row gap-4">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end">Trusted by the best teams</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={112}>
                            <div className="flex">
                                <img
                  className="mx-auto h-5 w-fit dark:invert"
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_13d5402d5-1778213547531.png"
                  alt="Nvidia Logo"
                  height="20"
                  width="auto" />
                
                            </div>

                            <div className="flex">
                                <img
                  className="mx-auto h-4 w-fit dark:invert"
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_193ba5006-1778213546583.png"
                  alt="Column Logo"
                  height="16"
                  width="auto" />
                
                            </div>
                            <div className="flex">
                                <img
                  className="mx-auto h-4 w-fit dark:invert"
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1e0a245fe-1778213545948.png"
                  alt="GitHub Logo"
                  height="16"
                  width="auto" />
                
                            </div>
                            <div className="flex">
                                <img
                  className="mx-auto h-5 w-fit dark:invert"
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1ce8aca01-1778213545836.png"
                  alt="Nike Logo"
                  height="20"
                  width="auto" />
                
                            </div>
                            <div className="flex">
                                <img
                  className="mx-auto h-5 w-fit dark:invert"
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_151e63827-1778213546767.png"
                  alt="Lemon Squeezy Logo"
                  height="20"
                  width="auto" />
                
                            </div>
                            <div className="flex">
                                <img
                  className="mx-auto h-4 w-fit dark:invert"
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_15c5d0065-1778213545997.png"
                  alt="Laravel Logo"
                  height="16"
                  width="auto" />
                
                            </div>
                            <div className="flex">
                                <img
                  className="mx-auto h-7 w-fit dark:invert"
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1dd60f8b6-1778213545590.png"
                  alt="Lilly Logo"
                  height="28"
                  width="auto" />
                
                            </div>

                            <div className="flex">
                                <img
                  className="mx-auto h-6 w-fit dark:invert"
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1112a8c2a-1778213546024.png"
                  alt="OpenAI Logo"
                  height="24"
                  width="auto" />
                
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1} />
            
                        <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1} />
            
                    </div>
                </div>
            </div>
        </section>);

}