import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Form, Button, Card, Col } from 'react-bootstrap'


const RegisterCovid = () => {

    //Formik
    const formik = useFormik({
        initialValues: {
            name: "",
            year: "",
            passportNumber: "",
            gender: "",
            nation: "",
            province: "",
            district: "",
            wards: "",
            address: "",
            email: "",
            phone: ""
        },

        validationSchema: Yup.object({
            name: Yup.string().required("name input not empty").min(4, "name must be at least 4 characters long"),
            email: Yup.string().required("email input not empty").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "failse email format"),
            passportNumber: Yup
                .number("please enter number type")
                .required("passport input not empty")
                .min(9, "passport number must be at least 9 num long")
                .max(12, "passport number must have a maximum of 12 numbers"),
            gender: Yup.string().nullable("please check"),
            year: Yup.date().nullable("please check option year"),
            nation: Yup.string().nullable("please check option nation"),
            province: Yup.string().nullable("please check option province"),
            district: Yup.string().nullable("please check option district"),
            wards: Yup.string().nullable("please check option wards"),
            address: Yup.string().required("name input not empty"),
            phone: Yup
                .number("please enter number type")
                .required("passport input not empty")
                .min(10, "passport number must be at least 9 num long")
                .max(11, "passport number must have a maximum of 12 numbers")
        }),

        onSubmit: (values) => {
            window.alert("form submit")
            console.log(values)
        },
    });

    // console.log(formik.errors.email);


    return (
        <Card className='mt-5 justify-content-md-center shadow p-3 mb-5 bg-white rounded' as={Col} md={{ span: 6, offset: 3 }}>
            <Card.Body>
                <Card.Title className='text-warning text-center font-weight-bold'>Khai B??o Y T???</Card.Title>
                <Form onSubmit={formik.handleSubmit} >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label bg="warning" >H??? v?? t??n</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="h??? v?? t??n"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.name && (
                            <Form.Label className='text-danger' >
                                {formik.errors.name}
                            </Form.Label>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>N??m sinh</Form.Label>
                        <Form.Select name="year" value={formik.values.year} onChange={formik.handleChange}>
                            <option>Ch???n n??m sinh</option>
                            <option value="1990">1990</option>
                            <option value="1991">1991</option>
                            <option value="1992">1992</option>
                        </Form.Select>
                        {formik.errors.year && (
                            <Form.Label className='text-danger'  >
                                {formik.errors.year}
                            </Form.Label>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>S??? h??? chi???u/CCCD/CMND</Form.Label>
                        <Form.Control
                            type="text"
                            name="passportNumber"
                            placeholder="S??? h??? chi???u/CCCD/CMND"
                            value={formik.values.passportNumber}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.passportNumber && (
                            <Form.Label className='text-danger'  >
                                {formik.errors.passportNumber}
                            </Form.Label>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Gi???i t??nh</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Nam"
                                    name="gender"
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}
                                    type={type}
                                />
                                <Form.Check
                                    inline
                                    label="N???"
                                    name="gender"
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}
                                    type={type}
                                />
                                <Form.Check
                                    inline
                                    label="Kh??c"
                                    name="gender"
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}
                                    type={type}
                                />
                            </div>
                        ))}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Qu???c Gia</Form.Label>
                        <Form.Select name="nation" value={formik.values.nation} onChange={formik.handleChange} >
                            <option>Ch???n qu???c gia</option>
                            <option value="Vi???t Nam">Vi???t Nam</option>
                            <option value="???n ?????">???n ?????</option>
                            <option value="H??n Qu???c">H??n Qu???c</option>
                        </Form.Select>
                        {formik.errors.nation && (
                            <Form.Label className='text-danger'  >
                                {formik.errors.nation}
                            </Form.Label>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>T???nh/Th??nh</Form.Label>
                        <Form.Select name="province" value={formik.values.province} onChange={formik.handleChange}>
                            <option>Ch???n t???nh/th??nh ph???</option>
                            <option value="H??? Ch?? Minh">H??? Ch?? Minh</option>
                            <option value="H?? N???i">H?? N???i</option>
                            <option value="???? N???ng">???? N???ng</option>
                        </Form.Select>
                        {formik.errors.province && (
                            <Form.Label className='text-danger' >
                                {formik.errors.province}
                            </Form.Label>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Qu???n/Huy???n</Form.Label>
                        <Form.Select name="district" value={formik.values.district} onChange={formik.handleChange}>
                            <option>Ch???n qu???n/huy???n</option>
                            <option value="T??n Phong">T??n Phong</option>
                            <option value="Trung D??ng">Trung D??ng</option>
                            <option value="Thanh Xu??n">Thanh Xu??n</option>
                        </Form.Select>
                        {formik.errors.district && (
                            <Form.Label className='text-danger' >
                                {formik.errors.district}
                            </Form.Label>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Ph?????ng/X??</Form.Label>
                        <Form.Select name="wards" value={formik.values.wards} onChange={formik.handleChange}>
                            <option>Ph?????ng/X??</option>
                            <option value="Tr???ng D??i">Tr???ng D??i</option>
                            <option value="C??t L??i">C??t L??i</option>
                            <option value="Hi???p H??a">Hi???p H??a</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>S??? nh??, ph???, t??? d??n ph???/th??n/?????i </Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.address && (
                            <Form.Label className='text-danger' >
                                {formik.errors.address}
                            </Form.Label>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>S??? ??i???n tho???i </Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.phone && (
                            <Form.Label className='text-danger' >
                                {formik.errors.phone}
                            </Form.Label>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email </Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="?????a ch??? email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email && (
                            <Form.Label className='text-danger' >
                                {formik.errors.email}
                            </Form.Label>
                        )}
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default RegisterCovid