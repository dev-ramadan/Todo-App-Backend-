export const resMsg = (res, status, msg, data = null,pagination) => {
    return res
        .status(status)
        .json({
            success: true,
            message: msg,
            data,
            pagination
        })
}