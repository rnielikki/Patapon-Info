# setTimerPos

Sets the position of the timer as PSP screen pixels. The timer pivot is on the middle, so it will be center position.

Related guide: [How To: Add A Timer](./guide/how-to-add-a-timer.md)

## Code Information

- **Name**: `setTimerPos`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 9f 00`
- **Assembly Address in Memory** : `0x8922734`

## Parameters

- `(float)position_x` *(8 bytes)* : X position to put the timer, as *PSP screen pixels on screen*.
- `(float)position_y` *(8 bytes)* : Y position to put the timer, as *PSP screen pixels on screen*.

Note that **PSP screen size is 480 x 272** and the **pivot is on the middle**.

For example, "240 x 136" will put the timer in the middle of the screen.

## Example

Here is one example in hex:

```25 16 9f 00 / 10 00 00 00 / 00 00 70 43 / 10 00 00 00 / 00 00 c0 41```

Which is interpreted as:

```c
setTimerPos((float)240, (float)24)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08922734(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  undefined4 local_8;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if ((((*(int *)(param_1 + 0x10) != 0) &&
       (iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar3 != 0)) &&
      (iVar3 = *(int *)(iVar3 + 0x2c), iVar3 != 0)) && (iVar3 = *(int *)(iVar3 + 100), iVar3 != 0))
  {
    local_4 = *puVar2;
    local_8 = *puVar1;
    FUN_Mission__08b32ec8(iVar3,&local_8);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

