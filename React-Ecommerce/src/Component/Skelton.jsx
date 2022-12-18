import React from "react";

const Skelton = () => {
  return (
    <>
    <div className="flex flex-row flex-wrap">
     <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
	<div className="h-48 rounded-t dark:bg-black-700"></div>
	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-black-900">
		<div className="w-full h-6 rounded dark:bg-black-700"></div>
		<div className="w-full h-6 rounded dark:bg-black-700"></div>
		<div className="w-3/4 h-6 rounded dark:bg-black-700"></div>
	</div>
</div>
</div>
    </>
  );
};

export default Skelton;
