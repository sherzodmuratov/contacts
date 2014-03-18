import junit.framework.Assert;
import org.junit.Test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;


public class MySQLConnectionTest {

    @Test
    public void testConnect() throws Exception {
        String dbUrl = "jdbc:mysql://localhost:3306/contacts";
        String dbClass = "com.mysql.jdbc.Driver";
        String query = "Select * from contact";
        String username = "root";
        String password = "";

        Class.forName(dbClass);
        Connection connection = DriverManager.getConnection(dbUrl,
                username, password);
        Statement statement = connection.createStatement();
        ResultSet resultSet = statement.executeQuery(query);
        Assert.assertTrue("Must have a result", resultSet.next());
        connection.close();
    }
}