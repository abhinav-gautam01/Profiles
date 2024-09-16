const zod = require("zod");
const z = zod;

const CreateProfile =z.object({
    name: z.string(),
    description: z.string(),
    twitter: z.string(),
    linkedin: z.string()

})

module.exports={
    CreateProfile
}