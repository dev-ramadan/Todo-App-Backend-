import { loginService, registerService } from "../services/auth.services.js"

export const register = async (req, res) => {
  try {
    const user = await registerService(req.body);

    return res.status(201).json({
      success: true,
      message: "registration success",
      user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message || "internal server error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const token = await loginService(req.body);

    return res.status(200).json({
      success: true,
      message: "login success",
      token,
    });
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: err.message || "invalid email or password",
    });
  }
};





