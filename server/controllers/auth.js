export const register = (req, res) => {
    const {name, email, password} = req.body;
    console.log(name, email, password);
    // const user = new User({
    //     name,
    //     email,
    //     password,
    // });
    // user.save()
    // .then(() => {
    //     res.status(201).json({
    //         message: 'User created successfully',
    //     });
    // })
}