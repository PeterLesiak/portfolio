const NavigationItem = (props: { label: string; link: string }) => (
  <a href={props.link} className="group relative inline-block px-3 py-2 text-white">
    <div className="inline-block after:absolute after:bottom-0 after:left-0 after:hidden after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition-transform after:duration-[250ms] after:ease-out group-hover:after:scale-x-100 md:after:block">
      {props.label}
    </div>
  </a>
);

export default NavigationItem;
