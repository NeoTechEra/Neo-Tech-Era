export type Language = 'en' | 'ar';

export interface TranslationDictionary {
  common: {
    brandName: string;
    brandTagline: string;
    contactUs: string;
    exploreProducts: string;
    viewAllProducts: string;
    learnMore: string;
    backToOverview: string;
    backToHome: string;
    sar: string;
    liveDemo: string;
    flagshipBadge: string;
    productBadge: string;
    popularBadge: string;
    requestDemo: string;
    scheduleDemo: string;
    close: string;
    submit: string;
    sending: string;
    submittedSuccess: string;
    thankYou: string;
    weWillContact: string;
    sendAnother: string;
    viewDetails: string;
  };
  nav: {
    home: string;
    products: string;
    nabaa: string;
    about: string;
    contact: string;
    exploreCta: string;
    appearance: string;
    lightMode: string;
    darkMode: string;
    switchLight: string;
    switchDark: string;
    toggleMenu: string;
    nabaaTagline: string;
    pixShieldTagline: string;
    pricePulserTagline: string;
    ecommerceTagline: string;
  };
  breadcrumb: {
    home: string;
    products: string;
    productDetails: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    flagshipLabel: string;
    productsLabel: string;
    quickStats: {
      stat1Val: string;
      stat1Label: string;
      stat2Val: string;
      stat2Label: string;
      stat3Val: string;
      stat3Label: string;
    };
  };
  productsOverview: {
    badge: string;
    heading: string;
    subheading: string;
    flagshipCard: {
      badge: string;
      title: string;
      tagline: string;
      description: string;
      exploreButton: string;
      pills: string[];
    };
    otherCardsTitle: string;
    viewDetails: string;
  };
  featuredNabaa: {
    badge: string;
    headingLine1: string;
    headingLine2: string;
    description: string;
    flowStep0: string;
    flowStep1: string;
    flowStep2: string;
    explorePlatformBtn: string;
    adminTab: {
      badge: string;
      title: string;
      description: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
      badgeLive: string;
    };
    driverTab: {
      badge: string;
      title: string;
      description: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
      badgeLive: string;
    };
    customerTab: {
      badge: string;
      title: string;
      description: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
      badgeLive: string;
    };
  };
  nabaaPlatform: {
    sectionBadge: string;
    sectionHeading: string;
    sectionSubheading: string;
    adminHeaderBadge: string;
    adminHeaderTitle: string;
    adminHeaderSubtitle: string;
    kpiCapacityLabel: string;
    kpiCapacityVal: string;
    kpiDispatchLabel: string;
    kpiDispatchVal: string;
    subsystemsTitle: string;
    subsystems: {
      business: { name: string; desc: string };
      drivers: { name: string; desc: string };
      tankers: { name: string; desc: string };
      orders: { name: string; desc: string };
      promotions: { name: string; desc: string };
      promocodes: { name: string; desc: string };
      insights: { name: string; desc: string };
    };
    businessView: {
      title: string;
      desc: string;
      metric1Label: string;
      metric1Sub: string;
      metric2Label: string;
      metric2Sub: string;
      metric3Label: string;
      metric3Sub: string;
      metric4Label: string;
      metric4Sub: string;
      notice: string;
    };
    driversView: {
      title: string;
      desc: string;
      tableHeaders: {
        driver: string;
        phone: string;
        tanker: string;
        trips: string;
        rating: string;
        wallet: string;
        commission: string;
        status: string;
      };
      statusAvailable: string;
    };
    tankersView: {
      title: string;
      desc: string;
      cardSubtitle: string;
      idealForLabel: string;
      pricingCardTitle: string;
      pricingCardDesc: string;
      pricingBullet1: string;
      pricingBullet2: string;
      pricingBullet3: string;
    };
    ordersView: {
      title: string;
      desc: string;
      orderCards: {
        urgentTitle: string;
        urgentDesc: string;
        urgentMeta: string;
        scheduledTitle: string;
        scheduledDesc: string;
        scheduledMeta: string;
        completedTitle: string;
        completedDesc: string;
        completedMeta: string;
      };
      statusDelivered: string;
      statusInRoute: string;
      statusScheduled: string;
    };
    promotionsView: {
      title: string;
      desc: string;
      simulatorTitle: string;
      simulatorDesc: string;
      sliderLabel: string;
      simOrderValue: string;
      simDiscountGiven: string;
      simCustomerPays: string;
    };
    promocodesView: {
      title: string;
      desc: string;
      activeCodesLabel: string;
      codeBadge: string;
      codeBenefitLabel: string;
    };
    insightsView: {
      title: string;
      desc: string;
      metric1: string;
      metric1Sub: string;
      metric2: string;
      metric2Sub: string;
      metric3: string;
      metric3Sub: string;
      metric4: string;
      metric4Sub: string;
    };
  };
  customerApp: {
    sectionBadge: string;
    heading: string;
    subheading: string;
    simulatorPill: string;
    simulatorTitle: string;
    simulatorSubtitle: string;
    stepIndicator: string;
    stepTitles: {
      step1: string;
      step2: string;
      step3: string;
      step4: string;
      step5: string;
      step6: string;
    };
    step1: {
      title: string;
      prompt: string;
      customInputPlaceholder: string;
      nextBtn: string;
    };
    step2: {
      title: string;
      prompt: string;
      popularBadge: string;
      nextBtn: string;
    };
    step3: {
      title: string;
      prompt: string;
      nowTitle: string;
      nowDesc: string;
      scheduledTitle: string;
      scheduledDesc: string;
      selectDateLabel: string;
      nextBtn: string;
    };
    step4: {
      title: string;
      prompt: string;
      promoCodeLabel: string;
      applyBtn: string;
      appliedSuccess: string;
      availableCouponsTitle: string;
      summaryTitle: string;
      tankerSubtotal: string;
      promoDiscount: string;
      voucherDiscount: string;
      finalPayable: string;
      nextBtn: string;
    };
    step5: {
      title: string;
      prompt: string;
      methodCard: string;
      methodCardSub: string;
      methodAppleGoogle: string;
      methodAppleGoogleSub: string;
      methodCash: string;
      methodCashSub: string;
      payAndDispatchBtn: string;
    };
    step6: {
      searchingTitle: string;
      searchingDesc: string;
      foundTitle: string;
      assignedDriverLabel: string;
      vehicleLabel: string;
      tankerLabel: string;
      ratingLabel: string;
      phoneLabel: string;
      statusRadarLabel: string;
      restartSimulatorBtn: string;
    };
    capabilitiesListTitle: string;
    capabilities: string[];
  };
  driverApp: {
    sectionBadge: string;
    heading: string;
    subheading: string;
    interactiveConsoleBadge: string;
    interactiveConsoleTitle: string;
    interactiveConsoleSubtitle: string;
    driverProfileBadge: string;
    activeDriverName: string;
    activeDriverVehicle: string;
    activeDriverTanker: string;
    statusToggleAvailable: string;
    statusToggleOffline: string;
    tabs: {
      orderRadar: string;
      navigation: string;
      walletEarnings: string;
    };
    radarTab: {
      title: string;
      incomingOrderBadge: string;
      distanceLabel: string;
      tankerRequestedLabel: string;
      customerAddressLabel: string;
      deliveryTypeLabel: string;
      estTripFareLabel: string;
      driverEarningLabel: string;
      acceptOrderBtn: string;
      declineOrderBtn: string;
      orderAcceptedMsg: string;
      orderAcceptedDesc: string;
      openNavBtn: string;
    };
    navigationTab: {
      title: string;
      nextTurnLabel: string;
      turnInstruction: string;
      destinationLabel: string;
      estArrivalLabel: string;
      pumpingHoseReady: string;
      waterPumpingProgress: string;
      markDeliveredBtn: string;
      deliveredSuccessMsg: string;
    };
    walletTab: {
      title: string;
      balanceLabel: string;
      tripsCompletedToday: string;
      commissionModelLabel: string;
      simulatorTitle: string;
      simulatorDesc: string;
      modelTogglePercentage: string;
      modelToggleFixed: string;
      sliderLabel: string;
      calculatedDriverTakeHome: string;
      calculatedCompanyPlatformFee: string;
      payoutNotice: string;
    };
    driverFeaturesTitle: string;
    features: string[];
  };
  connectedJourney: {
    badge: string;
    heading: string;
    subheading: string;
    clickToInspect: string;
    steps: Array<{
      actor: string;
      title: string;
      description: string;
    }>;
  };
  whyNabaa: {
    badge: string;
    heading: string;
    subheading: string;
    cards: Array<{
      title: string;
      description: string;
      highlight: string;
    }>;
  };
  otherProducts: {
    badge: string;
    heading: string;
    subheading: string;
    pixShield: {
      badge: string;
      title: string;
      tagline: string;
      description: string;
      capabilities: string[];
      viewDetails: string;
    };
    pricePulser: {
      badge: string;
      title: string;
      tagline: string;
      description: string;
      capabilities: string[];
      viewDetails: string;
    };
    ecommerceBuilder: {
      badge: string;
      title: string;
      tagline: string;
      description: string;
      capabilities: string[];
      viewDetails: string;
    };
  };
  company: {
    badge: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    cardTitle: string;
    cardSubtitle: string;
    cardFlagshipLabel: string;
    cardFlagshipVal: string;
    cardProtectionLabel: string;
    cardProtectionVal: string;
    cardSocialLabel: string;
    cardSocialVal: string;
    footerNote: string;
  };
  finalCta: {
    badge: string;
    heading: string;
    description: string;
    exploreNabaa: string;
    flagshipBadge: string;
    viewAllProducts: string;
  };
  footer: {
    brandDescription: string;
    taglineBullets: string;
    navHeading: string;
    productsHeading: string;
    companyHeading: string;
    copyright: string;
    allRightsReserved: string;
    languageLabel: string;
  };
  contactModal: {
    badge: string;
    title: string;
    subtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    productSelectLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    sendingBtn: string;
    successTitle: string;
    successDesc: string;
    closeBtn: string;
  };
  nabaaDetail: {
    badge: string;
    title: string;
    subtitle: string;
    heading: string;
    subheading: string;
    backToOverview: string;
    scheduleDemoBtn: string;
    downloadBriefBtn: string;
    tabs: {
      admin: string;
      customer: string;
      driver: string;
      tankers: string;
    };
    adminSubsystemsHeading: string;
    adminSubsystemsSubheading: string;
    customerAppHeading: string;
    customerAppSubheading: string;
    driverAppHeading: string;
    driverAppSubheading: string;
    heroPills: string[];
    specsHeading: string;
    specsSubheading: string;
    tankerSizesHeading: string;
    tankerSizesSubheading: string;
    promotionsHeading: string;
    promotionsSubheading: string;
    architectureHeading: string;
    architectureSubheading: string;
    driversHeading: string;
    driversSubheading: string;
    ctaHeading: string;
    ctaSubheading: string;
    ctaButton: string;
  };
  pixShieldDetail: {
    badge: string;
    title: string;
    heading: string;
    tagline: string;
    description: string;
    backToOverview: string;
    inquireBtn: string;
    previewTitle: string;
    previewSubtitle: string;
    viewDemoBtn: string;
    featuresHeading: string;
    featuresSubheading: string;
    features: Array<{ title: string; description: string }>;
    workflowHeading: string;
    workflowSubheading: string;
    workflowSteps: Array<{ step: string; title: string; description: string }>;
    ctaHeading: string;
    ctaSubheading: string;
    ctaButton: string;
  };
  pricePulserDetail: {
    badge: string;
    title: string;
    heading: string;
    tagline: string;
    description: string;
    backToOverview: string;
    inquireBtn: string;
    generatorTitle: string;
    generatorSubtitle: string;
    tryGeneratorBtn: string;
    featuresHeading: string;
    featuresSubheading: string;
    features: Array<{ title: string; description: string }>;
    workflowHeading: string;
    workflowSubheading: string;
    workflowSteps: Array<{ step: string; title: string; description: string }>;
    ctaHeading: string;
    ctaSubheading: string;
    ctaButton: string;
  };
  ecommerceBuilderDetail: {
    badge: string;
    title: string;
    heading: string;
    tagline: string;
    description: string;
    backToOverview: string;
    inquireBtn: string;
    creatorTitle: string;
    creatorSubtitle: string;
    viewBuilderBtn: string;
    featuresHeading: string;
    featuresSubheading: string;
    features: Array<{ title: string; description: string }>;
    workflowHeading: string;
    workflowSubheading: string;
    workflowSteps: Array<{ step: string; title: string; description: string }>;
    ctaHeading: string;
    ctaSubheading: string;
    ctaButton: string;
  };
  seo: {
    home: {
      title: string;
      description: string;
      breadcrumb: string;
    };
    nabaa: {
      title: string;
      description: string;
      breadcrumb: string;
    };
    pixShield: {
      title: string;
      description: string;
      breadcrumb: string;
    };
    pricePulser: {
      title: string;
      description: string;
      breadcrumb: string;
    };
    ecommerceBuilder: {
      title: string;
      description: string;
      breadcrumb: string;
    };
  };
}
