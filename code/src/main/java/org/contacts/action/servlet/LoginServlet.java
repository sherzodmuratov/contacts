package org.contacts.action.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LoginServlet extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException{
        String username = request.getParameter("username").toUpperCase(),
        password = request.getParameter("password");

        response.setContentType("text/html");
        response.getWriter().write("Welcome " + username + " : " + password);
    }
}
