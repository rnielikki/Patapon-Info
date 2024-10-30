# How To: Add A Timer

## Draw a timer

1. Initialise the timer with [startTimer](../starttimer.md).
2. Set the position with [setTimerPos](../settimerpos.md).
3. Set the timer size with [setTimerSize](../settimersize.md).
4. (Optional) Set countdown sound on with [setTimerEnableSeType](../settimerenablesetype.md).

- If you want to add time to the timer, use [addTimer](../addtimer.md).
- `startTimer` can be *incremental* by passing 2nd paramter to `1`.

## Control the timer

- [setTimerPause](../settimerpause.md) does stop, pause and resume.
- [getTimerSec](../gettimersec.md) gets timer as seconds.

## Examples

This is the timer in first Guillotine in Demon Forudo Mission:

```c
0005E974  25000700:cmd_mov(40:CF, 16.0)
0005E988  25169D00:startTimer(40:CF, 2:0)
0005E99C  25169F00:setTimerPos(240.0, 24.0)
0005E9B0  2516A000:setTimerSize(32.0)
0005E9BC  25160F01:setTimerEnableSeType(2:1)
```

This is the Defence Practice timer:

```c
0005FF9C  25169D00:startTimer(55.0, 2:0)
0005FFB0  25169F00:setTimerPos(240.0, 24.0)
0005FFC4  2516A000:setTimerSize(32.0)
```

This is the timer in debug mode, proving changing the order of `startTimer` also works.

```c
	2C7E4 : 25169F00:setTimerPos(240.0, 136.0)
	2C7F8 : 2516A000:setTimerSize(21.0)
	2C804 : 25169D00:startTimer(20.0, 2:0)
```

This is the timer to trigger swinging axes in "Eternal Archfiend and the other vessel" 1st floor.

```c
00064200  2516A100:getTimerSec(20:0)
0006420C  25002100:cmd_ifCallLSE(20:0, 0.0, 1:64228)
00064224  25000100:cmd_end()
```