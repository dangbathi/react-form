import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Form, Button, Card } from 'react-bootstrap'


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
        <Card className='mt-5'>
            <Card.Body>
                <Card.Title className='text-warning'>Khai Báo Y Tế</Card.Title>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label bg="warning" >Họ và tên</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="họ và tên"
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
                        <Form.Label>Năm sinh</Form.Label>
                        <Form.Select name="year" value={formik.values.year} onChange={formik.handleChange}>
                            <option>Chọn năm sinh</option>
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
                        <Form.Label>Số hộ chiếu/CCCD/CMND</Form.Label>
                        <Form.Control
                            type="text"
                            name="passportNumber"
                            placeholder="Số hộ chiếu/CCCD/CMND"
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
                        <Form.Label>Giới tính</Form.Label>
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
                                    label="Nữ"
                                    name="gender"
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}
                                    type={type}
                                />
                                <Form.Check
                                    inline
                                    label="Khác"
                                    name="gender"
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}
                                    type={type}
                                />
                            </div>
                        ))}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Quốc Gia</Form.Label>
                        <Form.Select name="nation" value={formik.values.nation} onChange={formik.handleChange} >
                            <option>Chọn quốc gia</option>
                            <option value="Việt Nam">Việt Nam</option>
                            <option value="Ấn Độ">Ấn Độ</option>
                            <option value="Hàn Quốc">Hàn Quốc</option>
                        </Form.Select>
                        {formik.errors.nation && (
                            <Form.Label className='text-danger'  >
                                {formik.errors.nation}
                            </Form.Label>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Tỉnh/Thành</Form.Label>
                        <Form.Select name="province" value={formik.values.province} onChange={formik.handleChange}>
                            <option>Chọn tỉnh/thành phố</option>
                            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                            <option value="Hà Nội">Hà Nội</option>
                            <option value="Đà Nẵng">Đà Nẵng</option>
                        </Form.Select>
                        {formik.errors.province && (
                            <Form.Label className='text-danger'  >
                                {formik.errors.province}
                            </Form.Label>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Quận/Huyện</Form.Label>
                        <Form.Select name="district" value={formik.values.district} onChange={formik.handleChange}>
                            <option>Chọn quận/huyện</option>
                            <option value="Tân Phong">Tân Phong</option>
                            <option value="Trung Dũng">Trung Dũng</option>
                            <option value="Thanh Xuân">Thanh Xuân</option>
                        </Form.Select>
                        {formik.errors.district && (
                            <Form.Label className='text-danger'  >
                                {formik.errors.district}
                            </Form.Label>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phường/Xã</Form.Label>
                        <Form.Select name="wards" value={formik.values.wards} onChange={formik.handleChange}>
                            <option>Phường/Xã</option>
                            <option value="Trảng Dài">Trảng Dài</option>
                            <option value="Cát Lái">Cát Lái</option>
                            <option value="Hiệp Hòa">Hiệp Hòa</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Số nhà, phố, tổ dân phố/thôn/đội </Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.address && (
                            <Form.Label className='text-danger'  >
                                {formik.errors.address}
                            </Form.Label>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Số điện thoại </Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.phone && (
                            <Form.Label className='text-danger'  >
                                {formik.errors.phone}
                            </Form.Label>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email </Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="địa chỉ email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email && (
                            <Form.Label className='text-danger'  >
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