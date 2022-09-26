<template>
  <Hero />

  <section class="relative py-10">
    <div class="bg-primary w-px h-[90%] lg:absolute left-1/2"></div>
    <div
      class="px-5 md:px-10 lg:flex flex-row justify-around items-center mb-7"
    >
      <div class="flex flex-col justify-evenly items-center">
        <div class="lg:max-w-lg max-w-screen-md">
          <h1 class="mb-7 text-4xl font-bold text-primary font-primary">
            Who We Are.
          </h1>
          <p class="text-secondary font-accent">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            quaerat facere eveniet non dolor reiciendis, tempora eaque omnis.
            Consectetur libero sit aliquam laudantium optio, harum a minus
            itaque nihil quam? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptate ipsum facere placeat maiores iste
            tempora obcaecati? Illo, fuga veniam totam tenetur repellendus
            placeat? Excepturi repellendus ipsum nobis iure voluptate possimus!
          </p>
        </div>
        <div class="lg:max-w-lg max-w-screen-md lg:mt-14 my-10">
          <h1 class="mb-7 text-left text-4xl font-bold text-primary font-primary">
            What We Do.
          </h1>
          <p class="text-secondary font-accent">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            quaerat facere eveniet non dolor reiciendis, tempora eaque omnis.
            Consectetur libero sit aliquam laudantium optio, harum a minus
            itaque nihil quam? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptate ipsum facere placeat maiores iste
            tempora obcaecati? Illo, fuga veniam totam tenetur repellendus
            placeat? Excepturi repellendus ipsum nobis iure voluptate possimus!
          </p>
        </div>
      </div>

      <div class="flex flex-col justify-evenly items-center lg:pl-14">
        <div class="lg:max-w-lg max-w-screen-md">
          <h1
            class="mb-7 text-3xl font-bold text-primary font-primary border-b border-primary"
          >
            Our Vision
          </h1>
          <p class="text-secondary font-accent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos
            facere, perferendis aliquam dolores, quia fuga iure veniam ullam
            corrupti deleniti esse provident quas, numquam natus vitae quidem
            dolorum dignissimos.
          </p>
        </div>
        <div class="lg:max-w-lg max-w-screen-md lg:my-14 my-10">
          <h1
            class="mb-7 text-3xl font-bold text-primary font-primary border-b border-primary"
          >
            Our Future
          </h1>
          <p class="text-secondary font-accent">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut facilis
            ipsa eligendi, voluptatum magni error debitis sit.
          </p>
        </div>
        <div class="lg:max-w-lg max-w-screen-md">
          <h1
            class="mb-7 text-3xl font-bold text-primary font-primary border-b border-primary"
          >
            Our Bootcamp
          </h1>
          <p class="text-secondary font-accent">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut facilis
            ipsa eligendi, voluptatum magni error debitis sit excepturi
            cupiditate est, esse modi expedita, quasi enim sapiente atque
            ratione eum molestiae!
          </p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="bg-white pt-10">
      <div class="px-5 md:px-10">
        <div
          class="bg-primary w-10 h-10 rounded-full flex justify-center items-center my-3 shadow-md"
        >
          <i class="fas fa-code text-white text-xl"></i>
        </div>
        <h1 class="text-primary font-primary font-bold text-4xl mb-3">
          There is shortage of
        </h1>
        <h1 class="text-primary font-primary font-bold text-4xl">
          software engineer in south east asia.
        </h1>
        <div class="max-w-3xl my-5">
          <p class="text-secondary font-accent">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolore
            facere nemo maiores veniam quam corporis, expedita reiciendis
            quisquam esse soluta nesciunt atque nam quas blanditiis rerum magnam
            molestiae quo.
          </p>
        </div>
      </div>

      <div
        class="lg:flex flex-row justify-between mt-14 py-7 px-5 md:px-10 bg-[url('@/assets/earth.jpg')] shadow-black shadow-[0px_0px_100px_70px_inset] bg-center bg-cover bg-fixed"
      >
        <div class="lg:w-1/2 lg:pr-5 lg:mb-0 mb-7">
          <h1 class="text-primary font-primary font-bold text-xl pl-3 mb-5">
            What is Software Development?
          </h1>
          <div
            class="lg:pt-7 p-3 rounded-md bg-black/60 shadow-black/60 shadow-[0px_0px_20px_60px]"
          >
            <p class="text-slate-500 font-accent">
              A software developer, sometimes called a computer programmer, a
              programmer or more recently a coder. They need to know computer
              language such as (e.g. C, C#, Ruby, JavaScript, Python, Java etc).
              There is no industry-wide standard terminology, so "programmer"
              and "software developer" might refer to the same role at different
              companies. They might be self-taught or attended a programming
              bootcamp.
            </p>
          </div>
        </div>

        <div class="lg:w-1/2">
          <h1 class="text-primary font-primary font-bold text-xl mb-5">
            Average software developer salary around the world.
          </h1>
          <div
            class="bg-slate-100 rounded-md shadow-lg pt-5 h-64 overflow-auto"
          >
            <table
              class="text-primaryVariant font-accent w-full text-sm border-collapse table-auto"
            >
              <thead class="text-left">
                <tr class="sticky -top-5 bg-slate-100/50 backdrop-blur-sm">
                  <th class="pl-2 py-3 pr-0">Country</th>
                  <th class="py-3 pr-0">Junior Salary</th>
                  <th class="py-3 pr-0">Senior Salary</th>
                </tr>
              </thead>
              <tbody class="bg-slate-300/30">
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">USA</td>
                  <td class="border-y border-slate-300">$64,607</td>
                  <td class="border-y border-slate-300">$113,810</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">UK</td>
                  <td class="border-y border-slate-300">$55,044</td>
                  <td class="border-y border-slate-300">$97,830</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">Australia</td>
                  <td class="border-y border-slate-300">$68,489</td>
                  <td class="border-y border-slate-300">$121,725</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">Germany</td>
                  <td class="border-y border-slate-300">$63,570</td>
                  <td class="border-y border-slate-300">$112,983</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">
                    Netherlands
                  </td>
                  <td class="border-y border-slate-300">$56,000</td>
                  <td class="border-y border-slate-300">$99,000</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">Norway</td>
                  <td class="border-y border-slate-300">$65,825</td>
                  <td class="border-y border-slate-300">$116,991</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">
                    Switzerland
                  </td>
                  <td class="border-y border-slate-300">$76,555</td>
                  <td class="border-y border-slate-300">$136,061</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">Denmark</td>
                  <td class="border-y border-slate-300">$65,353</td>
                  <td class="border-y border-slate-300">$116,151</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">Singapore</td>
                  <td class="border-y border-slate-300">$52k</td>
                  <td class="border-y border-slate-300">$93k</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">Malaysia</td>
                  <td class="border-y border-slate-300">$22k</td>
                  <td class="border-y border-slate-300">$39k</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">Thailand</td>
                  <td class="border-y border-slate-300">$18k</td>
                  <td class="border-y border-slate-300">$32k</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">Vietnam</td>
                  <td class="border-y border-slate-300">$15k</td>
                  <td class="border-y border-slate-300">$26k</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">
                    Philippines
                  </td>
                  <td class="border-y border-slate-300">$10k</td>
                  <td class="border-y border-slate-300">$18k</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">Indonesia</td>
                  <td class="border-y border-slate-300">$17k</td>
                  <td class="border-y border-slate-300">$30k</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="md:px-10 mb-10 pt-16 bg-[url('@/assets/tailwindbg.png')] bg-no-repeat bg-cover bg-center shadow-slate-100 shadow-[0px_10px_50px_30px_inset]"
  >
    <div class="lg:flex flex-col justify-center items-end">
      <div class="mx-auto text-center lg:w-3/4 w-full px-5">
        <h1 class="text-primary text-4xl font-primary font-bold">
          Scale Up Your Skills
        </h1>
        <p class="text-secondary font-accent my-7">
          Want to become a future software developer? We are here to guide you
          in every your steps. Level up your coding skills and quickly land a
          job with tech companies. This is the best place to expand your
          programming knowledge and get prepared for your next interview.
        </p>
      </div>

      <div
        class="md:flex flex-row justify-center items-center md:mt-0 pt-10 md:pb-0 pb-5 w-full border-slate-300 border-b"
      >
        <div
          class="relative text-center mx-auto md:w-96 border-slate-300 border-t"
        >
          <UserIcon
            class="absolute -top-8 right-1/2 translate-x-1/2 w-14 h-14 p-4 text-indigo-400 bg-gradient-to-tr from-indigo-400 to-white rounded-full shadow-sm mx-auto"
          />
          <h1 class="text-primaryVariant font-primary font-bold text-xl pt-10 mb-4">
            <span class="text-primaryVariant/90">1.</span> UI/UX
          </h1>
          <p class="text-secondary mb-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            placeat aperiam soluta culpa consequuntur ratione odio accusantium
            mollitia illo debitis.
          </p>
          <img
            class="w-10 h-10 mx-auto"
            src="@/assets/arrow-right.svg"
            alt="arrow-image"
          />
        </div>

        <div
          class="relative text-center md:my-8 my-16 md:mx-5 mx-auto md:w-96 border-slate-300 border-t"
        >
          <CodeIcon
            class="absolute -top-8 right-1/2 translate-x-1/2 w-14 h-14 p-4 text-fuchsia-400 bg-gradient-to-tr from-fuchsia-400 to-white rounded-full shadow-sm mx-auto"
          />
          <h1 class="text-primaryVariant font-primary font-bold text-xl pt-10 mb-4">
            <span class="text-primaryVariant/90">2.</span> Web Development
          </h1>
          <p class="text-secondary mb-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            placeat aperiam soluta culpa consequuntur ratione odio accusantium
            mollitia illo debitis.
          </p>
          <img
            class="w-10 h-10 mx-auto"
            src="@/assets/arrow-right.svg"
            alt="arrow-image"
          />
        </div>

        <div
          class="relative text-center mx-auto md:w-96 border-slate-300 border-t"
        >
          <DesktopComputerIcon
            class="absolute -top-8 right-1/2 translate-x-1/2 w-14 h-14 p-4 text-cyan-400 bg-gradient-to-tr from-cyan-400 to-white rounded-full shadow-sm mx-auto"
          />
          <h1 class="text-primaryVariant font-primary font-bold text-xl pt-10 mb-4">
            <span class="text-primaryVariant/90">3.</span> Software Enginner
          </h1>
          <p class="text-secondary mb-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            placeat aperiam soluta culpa consequuntur ratione odio accusantium
            mollitia illo debitis.
          </p>
          <CheckIcon class="w-8 h-10 text-black/70 mx-auto" />
        </div>
      </div>
    </div>
  </section>

  <section>
    <div
      class="text-primary shadow-slate-100 shadow-[0px_20px_50px_50px_inset] bg-[url('@/assets/tailwindbg.png')] bg-fixed bg-no-repeat"
    >
      <div class="container mx-auto flex flex-col items-center pt-14">
        <div
          class="flex flex-col md:w-2/3 mx-auto text-center md:mt-0 px-5 mb-10"
        >
          <h2 class="text-darkrose font-primary tracking-loose">
            From Beginner
          </h2>
          <h1 class="text-4xl md:text-5xl font-primary font-bold mt-2">
            Become Job Ready.
          </h1>
          <p class="text-secondary font-accent mt-4">
            We are here to guide you in every your steps. Level up your coding
            skills and quickly land a job with tech companies. This is the best
            place to expand your programming knowledge and get prepared for your
            next interview.
          </p>
        </div>
        <div class="mx-auto md:w-10/12">
          <div class="container h-full">
            <div class="relative p-4 mx-auto h-full">
              <div
                class="absolute h-full border-x border-slate-400 right-1/2"
              ></div>
              <div
                class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
              >
                <div class="order-1 w-full"></div>
                <div class="order-1 w-full pr-10 py-4 text-right">
                  <h2 class="mb-3 text-base font-primary text-darkrose">
                    1-6 May, 2021
                  </h2>
                  <h1 class="mb-3 font-bold font-primary text-lg md:text-2xl">
                    Registration
                  </h1>
                  <p
                    class="leading-snug text-secondary font-accent md:text-base text-sm"
                  >
                    Pick your favourite event(s) and register in that event by
                    filling the form corresponding to that event. Its that easy
                    <br />
                    :)
                  </p>
                </div>
              </div>

              <div
                class="mb-8 flex justify-between items-center w-full right-timeline"
              >
                <div class="order-1 w-full"></div>
                <div class="order-1 w-full pl-10 py-4 text-left">
                  <h2 class="mb-3 text-base font-primary text-darkrose">
                    6-9 May, 2021
                  </h2>
                  <h1 class="mb-3 font-bold font-primary text-lg md:text-2xl">
                    Participation
                  </h1>
                  <p
                    class="leading-snug text-secondary font-accent md:text-base text-sm"
                  >
                    Participate online. The links for your registered events
                    will be sent to you via email and whatsapp groups. Use those
                    links and show your talent.
                  </p>
                </div>
              </div>

              <div
                class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
              >
                <div class="order-1 w-full"></div>
                <div class="order-1 w-full pr-10 py-4 text-right">
                  <h2 class="mb-3 text-base font-primary text-darkrose">
                    10 May, 2021
                  </h2>
                  <h1 class="mb-3 font-bold font-primary text-lg md:text-2xl">
                    Result Declaration
                  </h1>
                  <p
                    class="leading-snug text-secondary font-accent md:text-base text-sm"
                  >
                    The ultimate genius will be revealed by our judging panel on
                    10th May, 2021 and the resukts will be announced on the
                    whatsapp groups and will be mailed to you.
                  </p>
                </div>
              </div>

              <div
                class="mb-8 flex justify-between items-center w-full right-timeline"
              >
                <div class="order-1 w-full"></div>

                <div class="order-1 w-full pl-10 py-4">
                  <h2 class="mb-3 text-base font-primary text-darkrose">
                    12 May, 2021
                  </h2>
                  <h1
                    class="mb-3 font-bold font-primary text-lg md:text-2xl text-left"
                  >
                    Prize Distribution
                  </h1>
                  <p
                    class="leading-snug text-secondary font-accent md:text-base text-sm"
                  >
                    The winners will be contacted by our team for their
                    addresses and the winning goodies will be sent at their
                    addresses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-5 px-3 py-5 md:flex justify-center grid grid-cols-2 gap-2 md:gap-10 w-11/12 border-slate-300 border-b"
        >
          <div
            class="hover:-translate-y-1 duration-100 cursor-pointer bg-white rounded-sm shadow-sm flex flex-col justify-center p-5 md:px-5 md:py-8 md:w-64 w-full"
          >
            <h1 class="text-primaryVariant font-primary md:text-2xl">20+</h1>
            <p class="text-primaryVariant font-primary md:text-3xl mb-3">
              Languages
            </p>
            <div>
              <p class="text-secondary font-accent text-sm">
                Lorem ipsum dolor sit amet consectetur adipis.
                <ArrowRightIcon class="inline-flex text-primary w-4 h-4 mx-2" />
              </p>
            </div>
          </div>
          <div
            class="hover:-translate-y-1 duration-100 cursor-pointer bg-white rounded-sm shadow-sm flex flex-col justify-center p-5 md:px-5 md:py-8 md:w-64 w-full"
          >
            <h1 class="text-primaryVariant font-primary md:text-2xl">14+</h1>
            <p class="text-primaryVariant font-primary md:text-3xl mb-3">
              Projects
            </p>
            <div>
              <p class="text-secondary font-accent text-sm">
                Lorem ipsum dolor sit amet consectetur adipis.
                <ArrowRightIcon class="inline-flex text-primary w-4 h-4 mx-2" />
              </p>
            </div>
          </div>
          <div
            class="hidden hover:-translate-y-1 duration-100 cursor-pointer bg-white rounded-sm shadow-sm md:flex flex-col justify-center p-5 md:px-5 md:py-8 md:w-64 w-full"
          >
            <h1 class="text-primaryVariant font-primary md:text-2xl">17+</h1>
            <p class="text-primaryVariant font-primary md:text-3xl mb-3">Lorem</p>
            <div>
              <p class="text-secondary font-accent text-sm">
                Lorem ipsum dolor sit amet consectetur adipis.
                <ArrowRightIcon class="inline-flex text-primary w-4 h-4 mx-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-20">
    <h1 class="text-center font-primary text-xl text-primary">
      Help make a change
    </h1>
    <h1 class="text-primary font-primary text-center text-4xl mb-3">
      Learn to code with perfect 404
    </h1>
    <main
      class="sm:px-5 pb-20 bg-[url('@/assets/gridbg1.png')] shadow-cyan-200/20 shadow-[500px_200px_500px_00px_inset] border-slate-300 border-b"
    >
      <div class="md:flex md:justify-between md:items-center w-full my-20">
        <CodeBlock
          class="overflow-auto rounded-md scrollbar-hide h-96 w-full md:w-1/2 block md:hidden"
          :code="htmlCode"
          language="language-html"
        />
        <div class="w-[97%] md:w-1/2 md:mx-2 rounded-md mx-auto">
          <div class="pr-0">
            <Browser label="">
              <h1 class="font-bold">Code Example</h1>
              <div>
                <img
                  class="w-[50px] shadow-sm"
                  src="@/assets/html.png"
                  alt="profile-image"
                />
                <div>
                  <h1 class="font-bold">HTML</h1>
                  <p>
                    Hey! I'am Html. I'am going to show you the differents
                    between HyperText Markup Language (Html), Cascading Style
                    Sheets (Css) and JavaScript (JS).
                  </p>
                  <button class="border-black border text-xs">Dark mode</button>
                </div>
              </div>
              <p>
                <span>Note:</span>This is how HTML code looks like on webpage
                (without css) especially dark mode button doesn't work when you
                click.
              </p>
            </Browser>
          </div>
        </div>
        <CodeBlock
          class="overflow-auto rounded-md scrollbar-hide h-96 w-full md:w-1/2 hidden md:block"
          :code="htmlCode"
          language="language-html"
        />
      </div>

      <div class="md:flex md:justify-between md:items-center w-full mb-20">
        <CodeBlock
          class="overflow-auto rounded-md scrollbar-hide h-80 w-full md:w-1/2"
          :code="cssCode"
          language="language-css"
        />
        <div class="w-[97%] md:w-1/2 md:mx-2 rounded-md mx-auto">
          <div class="pl-0">
            <Browser label="">
              <h1
                class="text-primaryVariant text-center font-primary font-bold text-xl mt-5"
              >
                Code Example
              </h1>
              <div
                class="relative w-2/3 bg-slate-900/5 shadow-md rounded-md px-3 mt-5 mb-5 mx-auto"
              >
                <img
                  class="absolute -top-5 left-2 w-[40px] h-[40px] rounded-full shadow-lg"
                  src="@/assets/css.png"
                  alt="profile-image"
                />
                <div class="pt-7 pb-3">
                  <h1 class="text-primaryVariant mb-1 text-lg font-primary">
                    CSS
                  </h1>
                  <p class="text-secondary mb-2 text-sm font-accent">
                    Hey! I'am Css. I'am going to show you the differents
                    between HyperText Markup Language (Html), Cascading Style
                    Sheets (Css) and JavaScript (JS).
                  </p>
                  <ButtonPrimary
                    class="text-xs px-3 py-1.5"
                    label="Dark mode"
                  />
                </div>
              </div>
              <p
                class="text-secondary font-accent text-xs mb-5 text-center w-3/4 mx-auto"
              >
                <span class="font-primary">Note:</span>This is how CSS code
                looks like on webpage (without JS) especially dark mode button
                doesn't work when you click.
              </p>
            </Browser>
          </div>
        </div>
      </div>

      <div class="md:flex md:justify-between md:items-center w-full">
        <CodeBlock
          class="overflow-auto rounded-md scrollbar-hide h-72 w-full md:w-1/2 block md:hidden"
          :code="javascriptCode"
          language="language-javascript"
        />
        <div class="w-[97%] md:w-1/2 md:mx-2 rounded-md mx-auto">
          <div class="pl-0">
            <Browser label="">
              <div :class="darkMode ? 'dark' : ''">
                <h1
                  class="text-primaryVariant text-center font-primary font-bold text-xl mt-5"
                >
                  Code Example
                </h1>
                <div
                  class="relative w-2/3 dark:bg-black bg-slate-900/5 shadow-md rounded-md px-3 mt-5 mb-5 mx-auto"
                >
                  <img
                    class="absolute -top-5 left-2 w-[40px] h-[40px] rounded-full shadow-lg"
                    src="@/assets/js.jpg"
                    alt="profile-image"
                  />
                  <div class="pt-7 pb-3">
                    <h1
                      class="text-primaryVariant dark:text-slate-100 mb-1 text-lg font-primary"
                    >
                      JavaScript
                    </h1>
                    <p
                      class="text-secondary dark:text-slate-300 mb-2 text-sm font-accent"
                    >
                      Hey! I'am Javascript. I'am going to show you the differents
                      between HyperText Markup Language (Html), Cascading Style
                      Sheets (Css) and JavaScript (JS).
                    </p>
                    <ButtonPrimary
                      @click="darkMode = !darkMode"
                      class="text-xs px-3 py-1.5 dark:bg-slate-200 dark:text-slate-900"
                      label="Dark mode"
                    />
                  </div>
                </div>
                <p
                  class="text-secondary font-accent text-xs mb-5 text-center w-3/4 mx-auto"
                >
                  <span class="font-primary">Note:</span>This is how JS code
                  work, Now dark mode button can apply dark theme when you
                  click.
                </p>
              </div>
            </Browser>
          </div>
        </div>
        <CodeBlock
          class="overflow-auto rounded-md scrollbar-hide h-72 w-full md:w-1/2 hidden md:block"
          :code="javascriptCode"
          language="language-javascript"
        />
      </div>
    </main>
  </section>

  <section class="my-10">
    <h1 class="text-primary font-primary font-bold text-4xl text-center">
      But there are some more
    </h1>
    <div
      class="bg-white font-accent bg-[url('@/assets/tailwindbg.png')] bg-no-repeat drop-shadow-sm rounded-sm mx-2 px-4 md:w-10/12 py-12 mt-7 md:mx-auto"
    >
      <div class="flex flex-row justify-center items-center flex-wrap">
        <div
          class="bg-sky-400 w-32 h-20 rounded-md shadow-xl flex flex-col justify-center items-center mx-2 my-4"
        >
          <img
            class="w-10 h-10 rounded-full shadow-md"
            src="@/assets/react.jpg"
            alt=""
          />
          <p class="text-white text-sm mt-1">React</p>
        </div>
        <div
          class="bg-green-500 w-32 h-20 rounded-md shadow-xl flex flex-col justify-center items-center mx-2 my-4"
        >
          <img
            class="w-10 h-10 rounded-full shadow-md"
            src="@/assets/vue.jpg"
            alt=""
          />
          <p class="text-white text-sm mt-1">Vue</p>
        </div>
        <div
          class="bg-red-700 w-32 h-20 rounded-md shadow-xl flex flex-col justify-center items-center mx-2 my-4"
        >
          <img
            class="w-10 h-10 rounded-full shadow-md"
            src="@/assets/angular.jpg"
            alt=""
          />
          <p class="text-white text-sm mt-1">Angular</p>
        </div>
        <div
          class="bg-amber-400 w-32 h-20 rounded-md shadow-xl flex flex-col justify-center items-center mx-2 my-4"
        >
          <img
            class="w-10 h-10 rounded-full shadow-md"
            src="@/assets/python.png"
            alt=""
          />
          <p class="text-white text-sm mt-1">Python</p>
        </div>
        <div
          class="bg-blue-600 w-32 h-20 rounded-md shadow-xl flex flex-col justify-center items-center mx-2 my-4"
        >
          <img
            class="w-10 h-10 rounded-full shadow-md"
            src="@/assets/bootstrap.png"
            alt=""
          />
          <p class="text-white text-sm mt-1">Bootstrap</p>
        </div>
        <div
          class="bg-sky-700 w-32 h-20 rounded-md shadow-xl flex flex-col justify-center items-center mx-2 my-4"
        >
          <img
            class="w-10 h-10 rounded-full shadow-md"
            src="@/assets/typescript.png"
            alt=""
          />
          <p class="text-white text-sm mt-1">Typescript</p>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <router-link to="/course">
          <ButtonWhite
            class="mx-auto mt-10 drop-shadow-xl"
            label="View all courses"
          />
        </router-link>
      </div>
    </div>
  </section>

  <About id="aboutUs" />

  <Review />

  <Contact id="contact" />
</template>

<script>
import CodeBlock from "../components/CodeBlock.vue";
import Hero from "../components/Hero.vue";
import Review from "../components/Review.vue";
import ButtonPrimary from "../components/ButtonPrimary.vue";
import ButtonWhite from "../components/ButtonWhite.vue";
import Browser from "../components/Browser.vue";
import About from "../components/About.vue";
import { UserIcon } from "@heroicons/vue/outline";
import { CodeIcon } from "@heroicons/vue/outline";
import { DesktopComputerIcon } from "@heroicons/vue/outline";
import { ArrowRightIcon } from "@heroicons/vue/outline";
import { CheckIcon } from "@heroicons/vue/outline";
import Contact from "../components/Contact.vue"
export default {
  name: "Home",
  components: {
    Hero,
    CodeBlock,
    ButtonPrimary,
    ButtonWhite,
    Review,
    Browser,
    About,
    UserIcon,
    CodeIcon,
    DesktopComputerIcon,
    ArrowRightIcon,
    CheckIcon,
    Contact
  },
  data() {
    return {
      darkMode: false,
      htmlCode: `<!DOCTYPE html>
  <head>
    <link rel="stylesheet" href="./style.css" />
    <title>Code Example</title>
  </head>
  <body>
      <div class="card">
          <img src="./img.jpg" width="50" height="57" alt="profile-image">
          <div class="card-body">
              <div class="title">
                  <h1>Alex</h1>
              </div>
              <div class="text">
                  <p>
                    The HyperText Markup Language, or HTML is the standard markup
                    language for documents designed to be displayed in a web
                    browser. It can be assisted by technologies such as Cascading
                    Style Sheets and scripting languages such as JavaScript.
                  </p>
              </div>
              <button onclick="darkMode()" class="btn">Click</button>
          </div>
      </div>
      <p class="footer-text">
        <span>Note:</span>This is how CSS code looks like on webpage (without JS) especially 
        button doesn't work when you click.
      </p>
  </body>
</html>`,
      cssCode: `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    width: 50%;
    height: 100%;
    margin-inline: auto;
}
.card{
    background: whitesmoke;
    width: 66%;
    margin-inline: auto;
    margin-top: 4rem;
    position: relative;
    border-radius: 0.7rem;
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.11);
}
img{
    position: absolute;
    top: -2rem;
    left: 1rem;
    border-radius: 3rem;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.342);
}
.card-body{
    padding-inline: 0.7rem;
    padding-top: 2.3rem;
    padding-bottom: 1rem;
}
.title{
    color: #000;
    margin-bottom: 0.7rem;
    font-family: sans-serif;
}
.text{
    color: rgb(73, 73, 73);
    margin-bottom: 0.8rem;
    font-family: sans-serif;
    font-size: small;
}
.btn{
    background: #000;
    color: white;
    border: none;
    font-size: 14px;
    padding-inline: 10px;
    padding-block: 3px;
    border-radius: 0.3rem;
    cursor: pointer;
    transition: 0.2s;
}
:hover.btn{
    background: rgba(0, 0, 0, 0.712);
}
.footer-text{
    width: 66%;
    margin-inline: auto;
    color: rgb(73, 73, 73);
    margin-bottom: 0.8rem;
    font-family: sans-serif;
    font-size: small;
    text-align: center;
    margin-top: 1rem;
}
span{
    color: #000;
    font-weight: bold;
}
.dark-mode {
    background-color: black;
}`,
      javascriptCode: `const cardClass = document.querySelector(".card");
const titleClass = document.querySelector(".title");
const textClass = document.querySelector(".text");
const btnClass = document.querySelector(".btn");

let status = 0;

function darkMode() {
    cardClass.classList.toggle("dark-mode");
    if (status === 0) {
        titleClass.style.color = ('white');
        textClass.style.color = ('white');
        btnClass.style.background = ('white');
        btnClass.style.color = ('black');
        status++;
    }
    else if (status === 1){
        titleClass.style.color = ('');
        textClass.style.color = ('');
        btnClass.style.background = ('');
        btnClass.style.color = ('');
        status--;
    }
}`,
    };
  },
};
</script>
