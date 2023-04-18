<script>
    import apartment from '../../static/propertyDetails/apartment.png'
    import building from '../../static/propertyDetails/building.png'
    import buildingBlack from '../../static/propertyDetails/buildingblack.png'
    import house from '../../static/propertyDetails/house.png'
    import money from '../../static/propertyDetails/money.png'
    import bed from '../../static/propertyDetails/bed.png'
    import arrowDown from '../../static/propertyDetails/arrowDown.png'
    import bath from '../../static/propertyDetails/bath.png'
    import calendar from '../../static/propertyDetails/calendar.png'
    import people from '../../static/propertyDetails/people.png'
</script>


<body class="container mx-auto max-w-base  pt-16">
    <div class="container flex justify-between w-full">
        <div class="w-102">
            <p class="mx-auto text-4xl font-amplitudeWide"> Property details</p>
            <p class="max-auto w-102 text-lg font-amplitudeWideBook pt-4 pb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <p class=" font-amplitudeWideMedium text-base ">Property Name</p>
            <input class="w-full h-12 border border-lavendergrey-500 rounded" />

            <p class=" font-amplitudeWideMedium text-base pt-3">Address</p>
            <input class="w-full h-12 border border-lavendergrey-500 rounded font-amplitudeWideBook"  placeholder="  21 Jump Street, Los Angeles, California"/>
        </div>
        <div>
            <img src={apartment} alt="apartment" width="350" height="233">
        </div>
    </div>

    <div class="pt-6">
        <p class="text-base font-amplitudeWideMedium pb-3">Property Type</p>
        <div class="grid grid-cols-4 gap-4 ">
            <button class="bg-white w-48 h-18 rounded border border-lavendergrey-500">
                <div class="flex justify-center gap-3 ">
                    <div class="pt-1">
                        <img src={house} width="28" height="28" alt="house frame"/>
                    </div>
                    <p class=" font-amplitudeWideMedium text-base pt-2 ">Single-Family</p>
                </div>
            </button>
            <button class="w-48 h-18 rounded border bg-ghostWhite-100 border-purpleHeart-600">
                <div class="flex justify-center gap-3">
                    <img src={building} width="28" height="28" alt="house frame"/>
                    <p class=" font-amplitudeWideMedium text-base pt-2 text-purpleHeart-600">Multi-Family</p>
                </div>
            </button>
            <button class="bg-white w-48 h-18 rounded border border-lavendergrey-500">
                <div class="flex justify-center gap-3">
                    <div class="pt-1">
                        <img src={house} width="28" height="28" alt="house frame"/>
                    </div>
                    <p class=" font-amplitudeWideMedium text-base pt-2 ">Townhome</p>
                </div>
            </button>
            <button class="bg-white w-48 h-18 rounded border border-lavendergrey-500">
                <div class="flex justify-center gap-3">
                    <img src={buildingBlack} width="28" height="28" alt="house frame"/>
                    <p class=" font-amplitudeWideMedium text-base pt-2 ">Condo</p>
                </div>
            </button>
        </div>
    </div>

    <div class="pt-7">
        <p class="text-base font-amplitudeWideMedium pb-1">Unity info</p>
        <div class="border border-ghostWhite bg rounded shadow-unitInfo bg-white px-6 py-5">
            <div class="grid grid-cols-4 justify-items-center gap-6">
                <div >
                    <p class=" font-amplitudeWideMedium ">Unit Name</p>
                    <input class="h-12 border w-46 rounded" placeholder="  Name and/or number"/>
                </div>
                <div class=" relative" >
                    <p class=" font-amplitudeWideMedium ">Rent</p>
                    <input class="h-12 border w-46 rounded placeholder:text-cornFlowerBlue-500 " placeholder="                             /mo"/>
                    <div class="absolute top-9 left-3">
                        <img src={money} width="24" height="24" alt="money"/>
                    </div>
                </div>
                <div class=" relative" >
                    <p class=" font-amplitudeWideMedium ">Deposit</p>
                    <input class="h-12 border w-46 rounded placeholder:text-cornFlowerBlue-500 " placeholder="                             /mo"/>
                    <div class="absolute top-9 left-3">
                        <img src={money} width="24" height="24" alt="money"/>
                    </div>
                </div>
                <div >
                    <p class=" font-amplitudeWideMedium ">Lase Length (months)</p>
                    <input class="h-12 border w-46 rounded placeholder:text-cornFlowerBlue-500" placeholder="   12"/>
                </div>
            </div>

            <div class="grid grid-cols-5  gap-6 pt-7 ">
                <div class="relative" >
                    <p class=" font-amplitudeWideMedium ">Beds</p>
                    <select class="h-12 border w-35 rounded cursor-pointer placeholder:text-cornFlowerBlue-500 appearance-none" />
                    <div class="absolute top-9 left-3 flex cursor-pointer">
                        <img src={bed} width="24" height="24" alt="bed"/>
                        <p class="pl-2 ">Select</p>
                        <div class="w-4 -right-9 top-2 absolute ">
                            <img src={arrowDown} width="17" height="10" alt="arrowDown"/>
                        </div>
                    </div>
                </div>
                <div class="relative" >
                    <p class=" font-amplitudeWideMedium ">Baths</p>
                    <select class="h-12 border w-35 rounded cursor-pointer placeholder:text-cornFlowerBlue-500 appearance-none" />
                    <div class="absolute top-9 left-3 flex cursor-pointer">
                        <img src={bath} width="24" height="24" alt="bath"/>
                        <p class="pl-2 ">Select</p>
                        <div class="w-4 -right-9 top-2 absolute ">
                            <img src={arrowDown} width="17" height="10" alt="arrowDown"/>
                        </div>
                    </div>
                </div>
                <div class="">
                    <p class=" font-amplitudeWideMedium ">Sq. Ft.</p>
                    <input class="h-12 border w-35 rounded  placeholder:text-cornFlowerBlue-500" placeholder="   12" />
                </div>
                <div class="relative" >
                    <p class=" font-amplitudeWideMedium ">Available on</p>
                    <select class="h-12 border w-35 rounded cursor-pointer placeholder:text-cornFlowerBlue-500 appearance-none" />
                    <div class="absolute top-9 left-3 flex cursor-pointer">
                        <img src={calendar} width="24" height="24" alt="calendar"/>
                        <p class="pl-2 ">11/4/2021</p>
                    </div>
                </div>
                <div class="relative" >
                    <p class=" font-amplitudeWideMedium ">Vacancy</p>
                    <select class="h-12 border w-35 rounded cursor-pointer placeholder:text-cornFlowerBlue-500 appearance-none" />
                    <div class="absolute top-9 left-3 flex cursor-pointer">
                        <img src={people} width="24" height="24" alt="people"/>
                        <p class="pl-2 ">Select</p>
                        <div class="w-4 -right-9 top-2 absolute ">
                            <img src={arrowDown} width="17" height="10" alt="arrowDown"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="pt-16 pb-14">
        <div class="flex justify-between">

            <button class=" w-32 h-11 rounded-3xl border-indigo-950 border bg-white font-light">
                BACK
            </button>

            <button class="shadow-button rounded-3xl bg-MediumSlateBlue-500 w-32 h-11 font-light text-white">
                CONTINUE
            </button>

        </div>

    </div>
</body>
