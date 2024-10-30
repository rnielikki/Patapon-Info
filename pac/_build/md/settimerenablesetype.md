# setTimerEnableSeType

Sets timer countdown sound during countdown.

Related guide: [How To: Add A Timer](./guide/how-to-add-a-timer.md)

## Code Information

- **Name**: `setTimerEnableSeType`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 0f 01`
- **Assembly Address in Memory** : `0x89290f4`

## Parameters

- `(bool)enable_sound` *(8 bytes)* : Does not activate sound if this is zero.

## Example

Here is one example in hex:

```25 16 0f 01 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setTimerEnableSeType((int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089290f4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  if ((((*(int *)(param_1 + 0x10) != 0) &&
       (iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar2 != 0)) &&
      (iVar2 = *(int *)(iVar2 + 0x2c), iVar2 != 0)) && (iVar2 = *(int *)(iVar2 + 100), iVar2 != 0))
  {
    *(undefined4 *)(iVar2 + 0x208) = *puVar1;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

