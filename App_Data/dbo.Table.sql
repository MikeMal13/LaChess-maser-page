CREATE TABLE [dbo].[Table]
(
	[Id] INT NOT NULL PRIMARY KEY, 
	[name] NVARCHAR(50) NOT NULL,
    [password] NVARCHAR(50) NOT NULL, 
    [mail] NVARCHAR(50) NOT NULL, 
    [gender] NCHAR(10) NOT NULL, 
    [time1] NCHAR(10) NOT NULL, 
    [time2] NCHAR(10) NOT NULL, 
    [time3] NCHAR(10) NOT NULL, 
    [time4] NCHAR(10) NOT NULL, 
    [time5] NCHAR(10) NOT NULL, 
    [birthday] NVARCHAR(50) NOT NULL, 
    [livingArea] NVARCHAR(50) NOT NULL
    
)
