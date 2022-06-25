const yargs=require("yargs")
yargs.command({
    command:"add",
    description:"this will add values",
    handle:function(){
        console.log("Add a note");
    }
})
yargs.command({
    command:"remove",
    description:"this will remove values",
    handle:function(){
        console.log("Remove a note");
    }
})
yargs.command({
    command:"list",
    description:"this will list data",
    handle:function(){
        console.log("list data");
    }
})
yargs.command({
    command:"read",
    description:"this will dsiplay all data",
    handle:function(){
        console.log("Display data");
    }
})

console.log(yargs.argv)