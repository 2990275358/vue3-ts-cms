import type { FormRules } from "element-plus"

// 输入规则的校验
export const accountRules: FormRules = {
  name: [
    {
      required: true,
      message: "账号不能为空~",
      trigger: "blur"
    },
    {
      pattern: /^[a-zA-z0-9]{5,10}$/,
      message: "账号必须为5-10位的字母或数字~",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "密码不能为空~"
    },
    {
      pattern: /^[a-zA-z0-9]{5,}$/,
      message: "密码必须为5位以上的字母或数字~"
    }
  ]
}
export const phoneRules: FormRules = {
  phone: [
    {
      required: true,
      message: "手机号不能为空~",
      trigger: "blur"
    },
    {
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: "请输入正确的手机号~",
      trigger: "blur"
    }
  ],
  code: [
    {
      required: true,
      message: "验证码不能为空~",
      trigger: "blur"
    },
    {
      pattern: /^\d{6}$/,
      message: "验证码必须为6位数字~",
      trigger: "blur"
    }
  ]
}
