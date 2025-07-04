import { Request, Response } from "express";
import * as Yup from "yup";
import UserModel from "../models/user.model";

type TRegister = {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const registerValidationSchema = Yup.object({
  fullname: Yup.string().required("Nama Lengkap harus diisi"),
  username: Yup.string().required("Username harus diisi"),
  email: Yup.string().email().required("Email tidak valid"),
  password: Yup.string().required("Password harus diisi"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), ""], "Password tidak sama"),
});

export default {
  async register(req: Request, res: Response) {
    const { fullname, username, email, password, confirmPassword } =
      req.body as unknown as TRegister;

    try {
      await registerValidationSchema.validate({
        fullname,
        username,
        email,
        password,
        confirmPassword,
      });

      const result = await UserModel.create({
        fullname,
        username,
        email,
        password,
      });

      res.status(200).json({
        message: "Berhasil registrasi pengguna",
        data: result,
      });
    } catch (error) {
      const err = error as Error;

      res.status(400).json({
        message: err.message,
        data: null,
      });
    }
  },
};
