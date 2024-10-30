# setTimerSize

Sets the size of the timer. The timer pivot is on the middle, so scales from center.

Related guide: [How To: Add A Timer](./guide/how-to-add-a-timer.md)

## Code Information

- **Name**: `setTimerSize`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 a0 00`
- **Assembly Address in Memory** : `0x89227e8`

## Parameters

- `(float)size` *(8 bytes)* : Size of the font *as PSP screen pixels*. Set as desired height, and width will be scaled accordingly.

Note there is still small margin.

## Example

Here is one example in hex:

```25 16 a0 00 / 10 00 00 00 / 00 00 00 42```

Which is interpreted as:

```c
setTimerSize((float)32)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089227e8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  undefined4 local_8;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  if ((((*(int *)(param_1 + 0x10) != 0) &&
       (iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar2 != 0)) &&
      (iVar2 = *(int *)(iVar2 + 0x2c), iVar2 != 0)) && (iVar2 = *(int *)(iVar2 + 100), iVar2 != 0))
  {
    local_8 = *puVar1;
    local_4 = local_8;
    func_0x08b32ee0(iVar2,&local_8);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

