package org.contacts.action.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class LoginServlet extends HttpServlet {
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException{
        String username = request.getParameter("username"),
        password = request.getParameter("password");

        HttpSession session = request.getSession(true);

        session.setAttribute("user", username);

        response.setContentType("text/html");
        response.getWriter().write("<a href='/list'>list</a>");
    }
}
