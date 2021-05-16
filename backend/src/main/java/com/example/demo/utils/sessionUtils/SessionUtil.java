package com.example.demo.utils.sessionUtils;

import net.sf.json.JSONObject;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class SessionUtil {


    public static Boolean checkAuthority() {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (requestAttributes != null) {
            HttpServletRequest request = requestAttributes.getRequest();
            HttpSession session = request.getSession(false);
            if (session != null) {
                Integer userIdentity = (Integer) session.getAttribute("userType");
                return userIdentity != null && userIdentity >= 0;
            }
        }
        return false;
    }

    public static Integer getUserId() {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (requestAttributes != null) {
            HttpServletRequest request = requestAttributes.getRequest();
            HttpSession session = request.getSession(false);
            if (session != null)
                return (Integer) session.getAttribute("userId");
        }
        return null;
    }

    public static JSONObject getAuthority() {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (requestAttributes != null) {
            HttpServletRequest request = requestAttributes.getRequest();
            HttpSession session = request.getSession(false);
            if (session != null) {
                JSONObject authorityObject = new JSONObject();
                authorityObject.put("userId", (Integer) session.getAttribute("userId"));
                authorityObject.put("username", (String) session.getAttribute("username"));
                authorityObject.put("userType", (Integer) session.getAttribute("userType"));
                return authorityObject;
            }
        }
        return null;
    }
    public static void setSession(JSONObject data) {
        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (servletRequestAttributes != null) {
            HttpServletRequest request = servletRequestAttributes.getRequest();
            HttpSession session = request.getSession();
            for (Object thisKey : data.keySet()) {
                String key = (String) thisKey;
                Object val = data.get(key);
                session.setAttribute(key, val);
            }
        }
        System.out.println("here");
    }

    public static boolean removeSession() {
        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (servletRequestAttributes != null) {
            HttpServletRequest request = servletRequestAttributes.getRequest();
            HttpSession session = request.getSession(false);
            if (session != null) {
                session.invalidate();
                return true;
            }
        }
        return false;
    }
}
