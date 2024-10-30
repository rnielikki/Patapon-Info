# addTimer

Adds time to the *existing timer*. Need to activate counter first with [startTimer](./starttimer.md).

## Code Information

- **Name**: `addTimer`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 9e 00`
- **Assembly Address in Memory** : `0x89226b0`

## Parameters

- `(float)time` *(8 bytes)* : Time as *seconds* to add.

## Example

Here is one example in hex:

```25 16 9e 00 / 10 00 00 00 / 00 00 20 41```

Which is interpreted as:

```c
addTimer((float)10)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089226b0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  if ((((*(int *)(param_1 + 0x10) != 0) &&
       (iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar2 != 0)) &&
      (iVar2 = *(int *)(iVar2 + 0x2c), iVar2 != 0)) && (*(int *)(iVar2 + 100) != 0)) {
    func_0x08b32e60(*puVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

